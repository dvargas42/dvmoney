import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionmodal: () => void;
}

export function Header({onOpenNewTransactionmodal}: HeaderProps) {
  
  return (
    <Container>
      
      <Content>
        <img src={logoImg} alt="dv money"/>
        <button onClick={onOpenNewTransactionmodal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  )
}