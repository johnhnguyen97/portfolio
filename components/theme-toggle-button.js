'use client'

import { Switch, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Switch
            colorScheme={useColorModeValue('purple', 'orange')}
            size="lg"
            onChange={toggleColorMode}
            defaultChecked={useColorModeValue(false, true)}
        />
    )
}

export default ThemeToggleButton
