import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'be1781ca42a849d5bbf795a077f8b403'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'da624cb2ff7345bcb8e363de8278057f'
                    }
                    'welcome-screen': {
                        table: 'sys_ui_page'
                        id: 'fe1966d816a747089dcd5de994772854'
                    }
                    'x_sofbv_figma_test/main': {
                        table: 'sys_ux_lib_asset'
                        id: '1865f69805ff468b83094ce0d16918a2'
                    }
                    'x_sofbv_figma_test/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'f12a48717c8248ff986cc52d7167cfed'
                    }
                }
            }
        }
    }
}
