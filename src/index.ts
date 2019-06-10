import { create } from './controllers/initializer';

export { Chat, Contact, Message } from './api/model';
export { Whatsapp } from './api/whatsapp';
export { create } from './controllers/initializer';

async function start() {
  const client = await create();

  // Group
  const groups = await client.getAllGroups();
  const group = groups.find(g => g.name === 'NEGATIVE VIBES/SHIT TALK');
  const metadata = await client.getGroupMembers(group.id._serialized);
  console.log(metadata);

  // console.log(berni.name);
}

start();