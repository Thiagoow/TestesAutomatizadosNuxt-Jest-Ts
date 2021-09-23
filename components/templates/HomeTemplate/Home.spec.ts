import { mount, Wrapper } from '@vue/test-utils'
import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate.vue'

/* Como nosso HomeTemplate possui uma função a mais além
de só estruturar todos os componentes pro nível de página
(que fará o SSR), iremos testa-lo. Porém do contrário, caso
um template só estruture os componentes, não há a necessidade de testa-lo. */

/* Devemos importar TODOS os componentes do HomeTemplate
aqui para que o teste consiga ser executado. Isso por que
estamos utilizando as importações e exportações automáticas
do Nuxt. No Vue, não há essa função, então já importariamos
cada um dos components. Nesse caso, bastaria apenas utilizar
o método 'shallowMount()' no lugar de 'mount()'. Para montar
o componente a qual será testado. */
import Container from '@/components/bosons/Container/Container.vue'
import Button from '@/components/atoms/Button/Button.vue'
import Input from '@/components/atoms/Input/Input.vue'
import List from '@/components/molecules/List/List.vue'

describe('Container', () => {
  // Variável para montar o botão 1 só vez para testa-lo:
  let wrapper: Wrapper<HomeTemplate>
  // Monta o componente ANTES de todos os testes desse grupo:
  beforeAll(() => {
    wrapper = mount(HomeTemplate, {
      /* Junto com as importações de todos os componentes existentes
        no HomeTemplate, definimos o: */
      stubs: { Container, Button, Input, List }
    })
  })

  test('Render list items and his items when form is submitted', async () => {
    console.warn('Lista vazia (antes do teste):')
    console.log(wrapper.html())

    // Define um valor pro input:
    await wrapper.find('input').setValue('Foo')
    // Emite o evento de enviar o form:
    await wrapper.find('form').trigger('submit')

    console.warn('Lista preenchida (depois do teste):')
    console.log(wrapper.html())

    expect(wrapper.findAll('li').length).toBe(wrapper.vm.$data.resultLimit)
  })
})
