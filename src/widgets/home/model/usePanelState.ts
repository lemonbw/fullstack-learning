import { usePathname } from 'next/navigation';

export default function usePanelState() {
  const pathname = usePathname() ?? '';
  const section = pathname === '/lessons' ? 'Lessons' : 'Overview';
  return section
}
