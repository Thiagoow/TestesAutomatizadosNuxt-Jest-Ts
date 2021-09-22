import { mount, Wrapper } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button', () => {
  // Variável para montar o botão 1 só vez para testa-lo:
  let wrapper: Wrapper<Button>
  // Monta o componente ANTES de todos os testes desse grupo:
  beforeAll(() => {
    wrapper = mount(Button, {
      propsData: {
        text: 'texto :D',
        type: 'submit'
      }
    })
  })

  /* Meu primeiro test com o Jest :DDD 
  test('is a Vue instance', () => {
    const wrapper = mount(Button, {
      propsData: {
        text: 'texto :D',
        type: 'submit'
      }
    })
    
    console.log('Componente montado: ', wrapper.html())
    // Espera que ele consiga montar a instância de model do botão:
    expect(wrapper.vm).toBeTruthy()
  })
  */

  test('Have self component class name', () => {
    // Pra dar certo a classe do botão tem que conter a palavra:
    expect(wrapper.classes()).toContain('button')
  })

  test('Render the text using prop', () => {
    // Pra dar certo, o texto do botão tem que ser:
    expect(wrapper.find('button').text()).toBe('texto :D')
  })

  test('Set the button type', () => {
    expect(wrapper.attributes('type')).toBe('submit')
  })

  test('Emit and event on click', async () => {
    // Emite um evento chamado click:
    await wrapper.trigger('click')
    // Pra dar certo tem que emitir um evento chamado click, 1 única vez:
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
