describe('Author', () => {
  it('displays author name', async () => {
    const wrapper = mount(Author, {
      props: {
        author: {
          name: 'J.K. Rowling',
          bio: '',
          date_of_birth: '',
        },
        books: [],
      },
    });

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the author name is displayed
    expect(wrapper.find('h1').text()).toEqual('J.K. Rowling');
  });

  it('displays author bio', async () => {
    const wrapper = mount(Author, {
      props: {
        author: {
          name: 'J.K. Rowling',
          bio: 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965),[2] better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[3][4] becoming the best-selling book series in history.[5] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[6] and was a producer on the final films.[7] She also writes crime novels under the pen name Robert Galbraith.',
          date_of_birth: '',
        },
        books: [],
      },
    });

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the author bio is displayed
    expect(wrapper.find('.splash p').text()).toEqual('Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965),[2] better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[3][4] becoming the best-selling book series in history.[5] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[6] and was a producer on the final films.[7] She also writes crime novels under the pen name Robert Galbraith.');
  });

  it('displays books by author', async () => {
    const wrapper = mount(Author, {
      props: {
        author: {
          name: 'J.K. Rowling',
          bio: '',
          date_of_birth: '',
        },
        books: [
          {
            id: 1,
            title: 'Harry Potter and the Philosopher\'s Stone',
            description: 'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51Eq4ZzSjNL._SX331_BO1,204,203,200_.jpg',
          },
          {
            id: 2,
            title: 'Harry Potter and the Chamber of Secrets',
            description: 'The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he\'s packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51Eq4ZzSjNL._SX331_BO1,204,203,200_.jpg',
          },
        ],
      },
    });

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the books are displayed
    expect(wrapper.findAll('.book').length).toEqual(2);
    expect(wrapper.findAll('.book h3')[0].text()).toEqual('Harry Potter and the Philosopher\'s Stone');
    expect(wrapper.findAll('.book h3')[1].text()).toEqual('Harry Potter and the Chamber of Secrets');
  });
});