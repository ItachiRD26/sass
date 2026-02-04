import { db } from '../firebase/client';
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';
import { Quote } from './companies';

const QUOTES_COLLECTION = 'quotes';

export async function getQuotes(companyId: string): Promise<Quote[]> {
  try {
    const q = query(
      collection(db, QUOTES_COLLECTION),
      where('companyId', '==', companyId)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      expiryDate: doc.data().expiryDate?.toDate() || new Date(),
    } as Quote));
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
}

export async function getQuote(companyId: string, quoteId: string): Promise<Quote | null> {
  try {
    const docRef = doc(db, QUOTES_COLLECTION, quoteId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    if (data.companyId !== companyId) {
      throw new Error('Unauthorized');
    }

    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
      expiryDate: data.expiryDate?.toDate() || new Date(),
    } as Quote;
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
}

export async function createQuote(
  companyId: string,
  quote: Omit<Quote, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Quote> {
  try {
    const docRef = await addDoc(collection(db, QUOTES_COLLECTION), {
      ...quote,
      companyId,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      expiryDate: Timestamp.fromDate(quote.expiryDate),
    });

    return {
      id: docRef.id,
      ...quote,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Quote;
  } catch (error) {
    console.error('Error creating quote:', error);
    throw error;
  }
}

export async function updateQuote(
  companyId: string,
  quoteId: string,
  updates: Partial<Quote>
): Promise<void> {
  try {
    const docRef = doc(db, QUOTES_COLLECTION, quoteId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Quote not found');
    }

    const data = docSnap.data();
    if (data.companyId !== companyId) {
      throw new Error('Unauthorized');
    }

    const updateData: any = {
      ...updates,
      updatedAt: Timestamp.now(),
    };

    if (updates.expiryDate) {
      updateData.expiryDate = Timestamp.fromDate(updates.expiryDate);
    }

    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error('Error updating quote:', error);
    throw error;
  }
}
