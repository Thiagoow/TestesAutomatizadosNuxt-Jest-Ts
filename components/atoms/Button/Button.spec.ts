import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button', () => {
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

  test('Should have self component class name', () => {
    const wrapper = mount(Button, {
      propsData: {
        text: 'Foo',
        type: 'submit'
      }
    })
  })

  expect(wrapper.classes()).toContain('button')
})
