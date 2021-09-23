import { mount, Wrapper } from '@vue/test-utils'
import Container from '@/components/bosons/Container/Container.vue'

describe('Container', () => {
  // Variável para montar o botão 1 só vez para testa-lo:
  let wrapper: Wrapper<Container>
  // Monta o componente ANTES de todos os testes desse grupo:
  beforeAll(() => {
    wrapper = mount(Container, {
      slots: {
        /* Tenta colocar uma tag de ícone dentro da tag
        slot desse componente: */
        default: '<i/>'
      }
    })
  })

  test('Render the slot content inside the default(no custom name) slot tag', () => {
    // Dá certo se existir uma tag 'i' no lugar da tag slot:
    expect(wrapper.find('i').exists()).toBe(true)
  })

  test('Have self component class name', () => {
    // Pra dar certo a classe do botão tem que conter a palavra:
    expect(wrapper.classes()).toContain('container')
  })
})
