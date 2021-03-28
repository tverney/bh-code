import { mount } from 'enzyme'
import Index from '../../pages/index'

describe('Testing UI', () => {
  test('should show a h4 title', () => {
    const text = 'Exercise'
    const component = mount(<Index />)
    expect(component.find('h4').text()).toContain(text)
  })
})
