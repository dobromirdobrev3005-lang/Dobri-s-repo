import path from 'path';
import { NewPartnerData } from '../../../pages/partners/PartnersPage';

/** Generates a unique, self-describing Partner name so parallel/repeat runs never collide. */
export function uniquePartnerName(prefix = 'QA E2E Partner'): string {
  const stamp = Date.now();
  const rand = Math.random().toString(36).slice(2, 7);
  return `${prefix} ${stamp}-${rand}`;
}

export function newPartnerFixture(): NewPartnerData {
  const name = uniquePartnerName();
  return {
    name,
    type: 'Service',
    services: ['Смяна на масло'],
    address: 'Sofia, Bulgaria',
    phone: `88${Math.floor(1000000 + Math.random() * 8999999)}`,
    contactPerson: `QA Contact ${name}`,
    description: 'Created by an automated E2E test.',
    logoPath: path.resolve(__dirname, '..', 'assets', 'logo.png'),
    hideInMobileApp: false,
  };
}

/**
 * Builds a fully-different value for every editable field, so the update
 * step exercises real change on the whole form (not just one field) and
 * "EDITED" is traceable even in the Partner's name.
 */
export function updatedPartnerFixture(original: NewPartnerData): NewPartnerData {
  const name = `${original.name} EDITED`;
  return {
    name,
    type: original.type === 'Service' ? 'Insurer' : 'Service',
    services: ['Смяна на гуми'],
    address: 'Plovdiv, Bulgaria',
    phone: `89${Math.floor(1000000 + Math.random() * 8999999)}`,
    contactPerson: `QA Contact EDITED ${uniquePartnerName('')}`.trim(),
    description: `EDITED — updated by an automated E2E test at ${new Date().toISOString()}.`,
    logoPath: path.resolve(__dirname, '..', 'assets', 'logo-edited.png'),
    hideInMobileApp: true,
  };
}
