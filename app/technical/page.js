import NavPageBuilder from "../_components/_navPageBuilder/navPageBuilder"

export const metadata = {
  title: 'Technical',
  description: '...',
}

export default function technical() {
  const data = {
    title: 'Technical',
    sections: [
      {
        metadata: {
          href: '/technical/software/',
        },
        data: {
          title: 'Software',
          list: [
            'Maze Search',
            'Portfolio Site'
          ]
        }
      },

      {
        metadata: {
          href: '/technical/learningMachines',
        },
        data: {
          title: 'Learning Machines',
          list: [
            'Tic Tac Toe vs AI',
            'Musical Genre Classification'
          ]
        }
      },

      {
        metadata: {
          href: '/technical/modeling',
        },
        data: {
          title: 'Modeling',
          list: [
            'Exxon Mobil Security Returns',
            'Cellular Automata',
            'ABMs'
          ]
        }
      }
    ]
  };

  return <NavPageBuilder data={data} />;
}
