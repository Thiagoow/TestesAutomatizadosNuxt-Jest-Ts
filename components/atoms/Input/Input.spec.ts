import { mount, Wrapper } from '@vue/test-utils'
import Input from '@/components/atoms/Input/Input.vue'

describe('Input', () => {
  // Variável para montar o botão 1 só vez para testa-lo:
  let wrapper: Wrapper<Input>
  // Monta o componente ANTES de todos os testes desse grupo:
  beforeAll(() => {
    wrapper = mount(Input, {
      propsData: {
        placeholder: 'Texto :D'
      }
    })
  })

  test('Set the button placeholder', () => {
    expect(wrapper.attributes('placeholder')).toBe('Texto :D')
  })

  test('Emit and event on change value', async () => {
    // Emite um evento chamado click:
    await wrapper.setValue('send')
    // Pra dar certo tem que emitir um evento chamado click, 1 única vez:
    expect(wrapper.emitted('input')).toHaveLength(1)
  })
})
