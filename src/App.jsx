import { useState, useEffect } from 'react';
import styled from 'styled-components';
import googleLogo from './assets/logo.google.png';
import appleLogo from './assets/logo.apple.png';
import microsoftLogo from './assets/logo.microsoft.jpg';
import linkedinLogo from './assets/logo.linkedin.jpg';

const Pagina = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
`;

const Header = styled.header`
  padding: 16px 24px;
  background-color: #ffffff;
`;

const LogoImg = styled.img`
  height: 34px;
  width: auto;
  object-fit: contain;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 16px 60px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 48px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  margin: 0 0 4px 0;
`;

const Subtitulo = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 24px 0;
`;

const Link = styled.a`
  color: #0a66c2;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const BotaoSocial = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background-color: #eaf0f6;
    border-color: #0a66c2;
  }
`;

const LogoIcone = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

const Separador = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

const SeparadorLinha = styled.span`
  flex: 1;
  height: 1px;
  background-color: #e0e0e0;
`;

const SeparadorTexto = styled.span`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
`;

const CampoGrupo = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.9);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: #0a66c2;
    box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.15);
  }
`;

const InputSenhaContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputSenha = styled.input`
  width: 100%;
  padding: 12px 44px 12px 14px;
  border: 1.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.9);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: #0a66c2;
    box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.15);
  }
`;

const OlhoBtn = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 4px;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

const EsqueceuSenha = styled.a`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #0a66c2;
  text-decoration: none;
  margin-bottom: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const ManterAcesso = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #0a66c2;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

const BotaoEntrar = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #0a66c2;
  color: #ffffff;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;

  &:hover {
    background-color: #004182;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 24px 16px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

const FooterLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0a66c2;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const upCount = (num) => {
    setCount(prev => prev + num);
  };

  useEffect(() => {
    if (count === 0) return;

    const emailCorreto = 'usuario@email.com';
    const senhaCorreta = '1234';

    if (email === emailCorreto && senha === senhaCorreta) {
      alert(`Login realizado com sucesso!\n\nE-mail: ${email}\nSenha: ${senha}`);
    } else {
      alert(`Credenciais incorretas!\n\nE-mail digitado: ${email}\nSenha digitada: ${senha}\n\nTente novamente.`);
    }
  }, [count]);

  return (
    <Pagina>

      <Header>
        <LogoImg src={linkedinLogo} alt="LinkedIn" />
      </Header>

      <Main>
        <Card>

          <Titulo>Entrar</Titulo>
          <Subtitulo>
            Novo usuário do LinkedIn?{' '}
            <Link href="#">Cadastre-se agora</Link>
          </Subtitulo>

          <BotaoSocial type="button">
            <LogoIcone src={googleLogo} alt="Google" />
            Continuar com o Google
          </BotaoSocial>

          <BotaoSocial type="button">
            <LogoIcone src={microsoftLogo} alt="Microsoft" />
            Entrar com a Microsoft
          </BotaoSocial>

          <BotaoSocial type="button">
            <LogoIcone src={appleLogo} alt="Apple" />
            Entrar com Apple
          </BotaoSocial>

          <Separador>
            <SeparadorLinha />
            <SeparadorTexto>ou</SeparadorTexto>
            <SeparadorLinha />
          </Separador>

          <CampoGrupo>
            <Label>E-mail ou telefone</Label>
            <Input
              type="email"
              tag="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CampoGrupo>

          <CampoGrupo>
            <Label>Senha</Label>
            <InputSenhaContainer>
              <InputSenha
                type={mostrarSenha ? 'text' : 'password'}
                tag="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <OlhoBtn type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </OlhoBtn>
            </InputSenhaContainer>
          </CampoGrupo>

          <EsqueceuSenha href="#">Esqueceu a senha?</EsqueceuSenha>

          <ManterAcesso>
            <Checkbox type="checkbox" id="manter" defaultChecked />
            <CheckboxLabel htmlFor="manter">Manter acesso</CheckboxLabel>
          </ManterAcesso>

          <BotaoEntrar type="button" onClick={() => upCount(1)}>
            Entrar
          </BotaoEntrar>

        </Card>
      </Main>

      <Footer>
        <p>LinkedIn Corporation © 2026 · <FooterLink href="#">Contrato do Usuário</FooterLink> · <FooterLink href="#">Política de Privacidade</FooterLink></p>
      </Footer>

    </Pagina>
  );
}
