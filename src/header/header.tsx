import React from 'react'
import store from "../main";
import {Container, Divider, Stack, Tooltip} from "@mui/material";


const Header = () => {
  const [count, setCount] = React.useState(store.count)

  React.useEffect(() => {
   store.subscribe(() => {
      setCount(store.count)
    })
  }, [])
  return (
      <Stack
          component={'header'}
          className={'title'}
          direction={'row'}
          alignItems={'center'}
          height={56}
          sx={{
              borderRadius: `5px`,
              background: `rgba(255, 255, 255, 0.40)`,
          }}>
          <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <Stack className={'textMedium'} direction={'row'} alignItems={'center'} spacing={2}>
                  <Divider orientation={'vertical'} flexItem/>
                  <Stack direction={'row'} alignItems={'center'}>
                      <span>Класс дома 4</span>
                      <Tooltip title="ssss" arrow>
                          <Stack>
                          </Stack>
                      </Tooltip>
                  </Stack>
                  <Divider orientation={'vertical'} flexItem/>
              </Stack>
              <Stack
                  className={'textMedium'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  spacing={16}>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <Stack>Егор Николаевич</Stack>
                  </Stack>
              </Stack>
          </Container>
      </Stack>
  )
}

export default Header
