const central = {
  title: 'the central room',
  description: 'there is a room with a door in each cardinal direction',
  image: '#',
  items: [
    {
      key: 'first item',
      description: 'the first item',
      prevent: 'you cannot have it'
    }
  ],
  doors: {
    n: 'north',
    s: 'south',
    e: 'east',
    w: 'west'
  }
};

const north = {
  title: 'the Northern room',
  description: 'the room North of the central room.',
  image: '#',
  items: [
    {
      key: 'second item',
      description: 'the second item',
      prevent: 'you cannot have it'
    }
  ],
  doors: {
    s: 'central'
  }
};

const south = {
  title: 'the Southern room',
  description: 'there is a room to the South of the central room.',
  image: '#',
  items: [
    {
      key: 'third item',
      description: 'the third item',
      prevent: 'you cannot have it'
    }
  ],
  doors: {
    n: 'central'
  }
};

const east = {
  title: 'the Eastern room',
  description: 'there is a room to the East of the central room.',
  image: '#',
  items: [
    {
      key: 'fourth item',
      description: 'the fourth item',
      prevent: 'you cannot have it'
    }
  ],
  doors: {
    w: 'central'
  }
};

const west = {
  title: 'the Western room',
  description: 'there is a room to the West of the central room.',
  image: '#',
  items: [
    {
      key: 'win prize',
      description: 'you win, here is your prize',
      prevent: 'you cannot have it'
    }
  ],
  doors: {
    e: 'central'
  }
};