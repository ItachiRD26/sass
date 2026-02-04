import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, collection, query, addDoc, updateDoc, getDocs, doc } from 'firebase/firestore';
import { app } from '@/lib/firebase/client';

const db = getFirestore(app);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId');

    if (!companyId) {
      return NextResponse.json({ error: 'companyId requerido' }, { status: 400 });
    }

    const q = query(collection(db, 'companies', companyId, 'quotes'));
    const querySnapshot = await getDocs(q);
    const quotes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(quotes);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener cotizaciones' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { companyId, quote } = await request.json();

    if (!companyId || !quote) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'companies', companyId, 'quotes'), {
      ...quote,
      createdAt: new Date(),
      status: 'pending',
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 días
    });

    return NextResponse.json({ id: docRef.id, ...quote }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear cotización' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { companyId, quoteId, updates } = await request.json();

    if (!companyId || !quoteId || !updates) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = doc(db, 'companies', companyId, 'quotes', quoteId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date()
    });

    return NextResponse.json({ message: 'Cotización actualizada' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar cotización' }, { status: 500 });
  }
}
