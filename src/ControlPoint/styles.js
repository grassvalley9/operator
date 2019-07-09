import styled from 'styled-components'

export const SettingsContainer = styled.div`
  padding: 20px 20px 20px 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`
export const Label = styled.label`
  font-size: 1.6rem;
  margin: 20px 0 10px;
`

export const ChannelContainer = styled.div`
  font-size: 1.6rem;
  border: 2px solid black;
  overflow-y: scroll;
  flex: 2;
  padding-left: 10px;
`

export const TextInput = styled.input`
  font-size: 1.6rem;
  padding: 5px;
`
export const Select = styled.select`
  font-size: 1.6rem;
`

export const TimeInput = styled.input`
  width: 35%;
  font-size: 1.8rem;
`