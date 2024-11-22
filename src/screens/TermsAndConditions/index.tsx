import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Container, Content, Title, Paragraph } from './styles'; // Importando os estilos
import { BackButton } from '@components/BackButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '@routes/app.routes';
import { useNavigation } from "@react-navigation/native";

export function TermsAndConditions() {
  const navigation = useNavigation<StackNavigationProp<AppRoutes>>();

  function handleBackButtonPress() {
    navigation.navigate("Menu");
  }

  return (
    <Container>
      <ScrollView>
        <BackButton title="Opções de perfil" onPress={handleBackButtonPress} />
        <Content>
          <Title>Termos e Condições de Uso - Airball</Title>

          <Paragraph>
            Estes Termos e Condições ("Termos") regem o uso do aplicativo Airball ("Aplicativo" ou "Serviço"), uma plataforma digital criada para agendamento de partidas de basquete entre usuários. Ao acessar ou utilizar o Aplicativo, você concorda em cumprir e estar legalmente vinculado a estes Termos. Caso não concorde com estes Termos, você não deverá acessar ou usar o Aplicativo.
          </Paragraph>

          <Paragraph>
            <b>1. Definições</b>
            <br />
            Usuário(s): Qualquer pessoa que acesse e utilize o Aplicativo, seja como jogador, organizador de partida ou qualquer outro papel oferecido pela plataforma.
            <br />
            Serviço: Todos os recursos e funcionalidades oferecidos pelo Airball, incluindo o agendamento de partidas, interações entre usuários e outras funcionalidades relacionadas ao basquete.
          </Paragraph>

          <Paragraph>
            <b>2. Cadastro e Conta de Usuário</b>
            <br />
            Para utilizar o Airball, o Usuário deverá se cadastrar, fornecendo informações pessoais e criando uma conta de usuário. O Usuário se compromete a fornecer informações precisas e completas, e a manter sua conta segura. O Usuário é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas em sua conta.
          </Paragraph>

          <Paragraph>
            <b>3. Uso do Serviço</b>
            <br />
            O Usuário concorda em utilizar o Airball de acordo com os seguintes princípios:
          </Paragraph>
          <View>
            <Paragraph>• Não utilizar a plataforma para fins ilegais, fraudulentos ou para promover qualquer forma de discriminação, assédio ou violência.</Paragraph>
            <Paragraph>• Respeitar os direitos de outros Usuários e agir de maneira ética e justa durante o uso do Aplicativo.</Paragraph>
            <Paragraph>• Não violar ou tentar interferir nos sistemas de segurança ou nas funcionalidades do Aplicativo.</Paragraph>
            <Paragraph>• Cumprir todas as leis e regulamentos aplicáveis ao usar o Airball.</Paragraph>
          </View>

          <Paragraph>
            <b>4. Agendamento de Partidas</b>
            <br />
            O Usuário pode criar ou participar de partidas de basquete através da plataforma. O Airball não se responsabiliza por quaisquer lesões, danos pessoais ou materiais ocorridos durante as partidas agendadas. O Usuário é responsável por assegurar que a quadra de basquete esteja devidamente equipada e segura para a realização do jogo.
          </Paragraph>

          <Paragraph>
            <b>5. Propriedade Intelectual</b>
            <br />
            Todo o conteúdo presente no Aplicativo, incluindo logotipos, imagens, texto, gráficos, marcas registradas, é de propriedade exclusiva do Airball ou de seus licenciadores e está protegido pelas leis de propriedade intelectual. O Usuário concorda em não reproduzir, modificar, distribuir ou utilizar qualquer parte do Aplicativo sem a permissão expressa do Airball.
          </Paragraph>

          <Paragraph>
            <b>6. Limitação de Responsabilidade</b>
            <br />
            O Airball não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de uso do Aplicativo, incluindo, sem limitação, danos por falhas técnicas, interrupções de serviço ou qualquer outra questão relacionada ao uso da plataforma.
          </Paragraph>

          <Paragraph>
            <b>7. Privacidade e Proteção de Dados</b>
            <br />
            A coleta, uso e armazenamento de dados pessoais dos Usuários serão regidos pela nossa Política de Privacidade. Ao utilizar o Airball, o Usuário concorda com o tratamento de seus dados conforme descrito nessa política. O Airball compromete-se a proteger a privacidade dos Usuários e a cumprir as leis aplicáveis de proteção de dados.
          </Paragraph>

          <Paragraph>
            <b>8. Modificação dos Termos</b>
            <br />
            O Airball reserva-se o direito de alterar, modificar ou atualizar estes Termos a qualquer momento, sem aviso prévio. Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a sua publicação. O Usuário é responsável por revisar periodicamente os Termos para se manter informado sobre qualquer alteração.
          </Paragraph>

          <Paragraph>
            <b>9. Suspensão ou Cancelamento da Conta</b>
            <br />
            O Airball se reserva o direito de suspender ou cancelar a conta de qualquer Usuário que viole estes Termos, sem aviso prévio, e sem qualquer responsabilidade. O Usuário pode encerrar sua conta a qualquer momento, através das configurações do Aplicativo.
          </Paragraph>

          <Paragraph>
            <b>10. Indenização</b>
            <br />
            O Usuário concorda em indenizar, defender e isentar o Airball, seus diretores, funcionários, parceiros e afiliados de qualquer reclamação, responsabilidade, danos ou custos, incluindo honorários advocatícios, decorrentes do uso indevido do Aplicativo ou violação destes Termos.
          </Paragraph>

          <Paragraph>
            <b>11. Disposições Gerais</b>
            <br />
            Legislação Aplicável: Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil.
            <br />
            Resolução de Conflitos: Quaisquer disputas ou reclamações decorrentes destes Termos ou do uso do Aplicativo serão resolvidas de forma amigável. Caso não seja possível, as partes concordam em submeter-se ao foro da cidade de São Paulo, Estado de São Paulo, Brasil.
          </Paragraph>

          <Paragraph>
            <b>12. Contato</b>
            <br />
            Se você tiver dúvidas sobre estes Termos, entre em contato conosco pelo e-mail airball@gmail.com ou através das redes sociais do Airball.
          </Paragraph>
        </Content>
      </ScrollView>
    </Container>
  );
}
