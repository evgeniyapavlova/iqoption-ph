<script>
	import Accordion from './common/Accordion.svelte';
	const items = [
		{
			q: 'O IQ Option é gratuito?',
			a: 'Sim, a conta básica do IQ Option é gratuita. Não há taxas de inscrição ou mensalidades para usar a plataforma.'
		},

		{
			q: 'O IQ Option é confiável?',
			a: 'Sim, o IQ Option é considerado confiável por milhões de usuários ao redor do mundo. A corretora tem uma reputação positiva por oferecer uma plataforma estável e funcionalidades adequadas para traders de todos os níveis de experiência.'
		},

		{
			q: 'O IQ Option é bom para iniciantes?',
			a: 'Sim, a IQ Option é altamente recomendada para iniciantes com essa graças a uma conta demo gratuita e materiais educacionais. A plataforma é intuitiva e oferece suporte para aprender sobre negociação financeira.'
		},

		{
			q: 'Como ganhar dinheiro com o IQ Option?',
			a: 'Os traders podem ganhar dinheiro no IQ Option negociando uma variedade de ativos, como CFDs, opções binárias, criptomoedas, entre outros. O lucro é obtido com base nas flutuações de preço dos ativos escolhidos.'
		},

		{
			q: 'Como investir no IQ Option?',
			a: 'Para investir no IQ Option, você precisa se registrar na plataforma, depositar fundos em sua conta e começar a negociar ativos financeiros disponíveis. A corretora oferece várias opções de investimento e instrumentos de negociação.'
		},

		{
			q: 'A retirada do IQ Option é segura?',
			a: 'Sim, a retirada de fundos do IQ Option é segura, desde que realizada através dos métodos de pagamento autorizados e verificados pelo usuário. A corretora segue procedimentos rigorosos de segurança para proteger as transações financeiras dos clientes.'
		},

		{
			q: 'Quanto dinheiro posso retirar do IQ Option?',
			a: 'O IQ Option não impõe um limite máximo de retirada. No entanto, existem limitações específicas para cada método de pagamento utilizado. Os usuários podem verificar os detalhes de retirada na plataforma.'
		}
	];
</script>

<section>
	<h2>Perguntas Frequentes</h2>
	<h3>
		A IQ Option está legalmente constituída em Antígua e Barbuda, o que permite à empresa fornecer
		serviços online para vários países
	</h3>

	{#each items as item, idx}
		{#if idx === 0}
			<Accordion open {item} />{:else}<Accordion {item} />{/if}
	{/each}
</section>

<style>
	h2 {
		margin-bottom: 10px;
	}
	h3 {
		text-align: center;
		margin-bottom: 40px;
		margin-top: 0;
	}
</style>
