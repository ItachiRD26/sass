import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { app } from '@/lib/firebase/client';

const db = getFirestore(app);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId');

    if (!companyId) {
      return NextResponse.json({ error: 'companyId requerido' }, { status: 400 });
    }

    const q = query(collection(db, 'companies', companyId, 'sales'));
    const querySnapshot = await getDocs(q);
    const sales = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(sales);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener ventas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { companyId, sale } = await request.json();

    if (!companyId || !sale) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'companies', companyId, 'sales'), {
      ...sale,
      createdAt: new Date(),
      status: 'completed'
    });

    return NextResponse.json({ id: docRef.id, ...sale }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear venta' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { companyId, saleId, updates } = await request.json();

    if (!companyId || !saleId || !updates) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = doc(db, 'companies', companyId, 'sales', saleId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date()
    });

    return NextResponse.json({ message: 'Venta actualizada' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar venta' }, { status: 500 });
  }
}
