import { mount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Index', () => {
  it('displays the library name', async () => {
    const wrapper = mount(Index);

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the library name is displayed
    expect(wrapper.find('h1').text()).toEqual('Manning County Library');
  });

  it('filters the book list by title', async () => {
    const wrapper = mount(Index);

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Set the search input value
    const input = wrapper.find('input[type="text"]');
    input.setValue('Harry Potter');

    // Click the search button
    const button = wrapper.find('button');
    await button.trigger('click');

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the book list is filtered
    expect(wrapper.findAll('.book')).toHaveLength(1);
    expect(wrapper.find('.book__title').text()).toEqual('Harry Potter and the Philosopher\'s Stone');
  });

  it('redirects to book details page when only one book is found', async () => {
    const wrapper = mount(Index);

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Set the search input value
    const input = wrapper.find('input[type="text"]');
    input.setValue('Harry Potter');

    // Click the search button
    const button = wrapper.find('button');
    await button.trigger('click');

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the book details page is displayed
    expect(wrapper.vm.$route.path).toEqual('/books/1');
  });

  it('redirects to book database page when no books are found', async () => {
    const wrapper = mount(Index);

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Set the search input value
    const input = wrapper.find('input[type="text"]');
    input.setValue('Nonexistent Book');

    // Click the search button
    const button = wrapper.find('button');
    await button.trigger('click');

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the book database page is displayed
    expect(wrapper.vm.$route.path).toEqual('/books/database');
    expect(window.alert).toHaveBeenCalledWith('No books found, redirecting to database');
  });

  it('redirects to a random book details page', async () => {
    const wrapper = mount(Index);

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Click the "I'm feeling lucky" button
    const button = wrapper.findAll('button').at(1);
    await button.trigger('click');

    // Wait for the data to load
    await wrapper.vm.$nextTick();

    // Check that the book details page is displayed
    expect(wrapper.vm.$route.path).toMatch(/^\/books\/\d+$/);
  });
});