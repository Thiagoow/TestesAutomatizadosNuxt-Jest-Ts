import { mount, Wrapper } from '@vue/test-utils'
import List from '@/components/molecules/List/List.vue'

describe('Container', () => {
  // Variável para montar o botão 1 só vez para testa-lo:
  let wrapper: Wrapper<List>
  // Monta o componente ANTES de todos os testes desse grupo:
  beforeAll(() => {
    wrapper = mount(List, {
      propsData: {
        /* Tenta criar uma lista simples: */
        items: ['a', 'b', 'c']
      }
    })
  })

  test("Render list items in the 'ul' tag", () => {
    // Dá certo se existir 3 tags li:
    expect(wrapper.findAll('li').length).toBe(3)
  })

  test('List items contain the right content', () => {
    // expect(wrapper.find('li').text).toContain('a')
  })
})
