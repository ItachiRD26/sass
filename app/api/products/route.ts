import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { app } from '@/lib/firebase/client';

const db = getFirestore(app);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId');
    const productId = searchParams.get('id');

    if (!companyId) {
      return NextResponse.json({ error: 'companyId requerido' }, { status: 400 });
    }

    if (productId) {
      // Obtener un producto específico
      const docRef = doc(db, 'companies', companyId, 'products', productId);
      const docSnap = await getDocs(query(collection(db, 'companies', companyId, 'products'), where('__name__', '==', productId)));
      if (docSnap.empty) {
        return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
      }
      return NextResponse.json(docSnap.docs[0].data());
    }

    // Obtener todos los productos
    const q = query(collection(db, 'companies', companyId, 'products'));
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { companyId, product } = await request.json();

    if (!companyId || !product) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'companies', companyId, 'products'), {
      ...product,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return NextResponse.json({ id: docRef.id, ...product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear producto' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { companyId, productId, updates } = await request.json();

    if (!companyId || !productId || !updates) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = doc(db, 'companies', companyId, 'products', productId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date()
    });

    return NextResponse.json({ message: 'Producto actualizado' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar producto' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId');
    const productId = searchParams.get('id');

    if (!companyId || !productId) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const docRef = doc(db, 'companies', companyId, 'products', productId);
    await deleteDoc(docRef);

    return NextResponse.json({ message: 'Producto eliminado' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar producto' }, { status: 500 });
  }
}
