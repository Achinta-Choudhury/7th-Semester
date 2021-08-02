import React  from 'react'
import { Menu } from 'semantic-ui-react'

export default () => {
    return (
        <Menu inverted>
        
        <Menu.Item>
          <img src="https://img.icons8.com/ultraviolet/40/000000/fingerprint.png"/>
        </Menu.Item>
        <Menu.Item
          name='Contact Us'
        />
        
        <Menu.Menu position="right">
        <Menu.Item
          name='Secure'
        />
        <Menu.Item>
          <img src="https://img.icons8.com/fluent/48/000000/india-circular.png"/>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}