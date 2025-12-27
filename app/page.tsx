import { redirect } from 'next/navigation';

export default function Home() {
  // Leitet automatisch auf /en weiter
  redirect('/en');
}
