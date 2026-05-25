import { updateContact, createContact, deleteContact } from './contacts';
import { redirect } from 'react-router';

export async function rootAction() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function editAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function destroyAction({ params }) {
  await deleteContact(params.contactId);
  return redirect(`/`);
}

export async function favoriteAction({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}
