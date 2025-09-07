<script>
	import ImageWrap from './common/ImageWrap.svelte';
</script>

<section>
	<h2>O que é IQ Option?</h2>
	<p>
		A IQ Option atua oficialmente no mercado financeiro desde 2013. Para uma corretora no mundo
		atual, esse é um período significativo. Nesse tempo, tornou-se um parceiro confiável e rentável
		para muitos investidores e traders.
	</p>

	<div class="table-wrap">
		<table>
			<tr
				><td>Quartel general</td>
				<td>The Colony House, 41 Nevis Street, Saint John’s, Antigua and Barbuda</td></tr
			>
			<tr
				><td>Ano de fundação</td>
				<td>2013</td></tr
			>
			<tr
				><td>Produto Oferecido</td>
				<td>CFD, opções binárias e digitais com rentabilidade de 92%</td></tr
			>
			<tr
				><td>Moedas suportadas</td>
				<td>USD, R$BRL, EUR </td></tr
			>
			<tr
				><td>Variedade de métodos de pagamento</td>
				<td
					>PIX, Mastercard, Visa, Pic Pay, Boleto Rapido, Neteller, Volet.com, Skrill, Perfect Money</td
				></tr
			>
			<tr
				><td>Depósito mínimo</td>
				<td>U$10/R$60</td></tr
			>
			<tr
				><td>Retiradas rápidas</td>
				<td
					>Webmoney WMZ, PIX, Mastercard, Visa, Pic Pay, Boleto Rapido, Neteller, Volet.com, Skrill,
					Perfect Money</td
				></tr
			>
			<tr
				><td>Retirada mínima</td>
				<td>U$2/R$10</td></tr
			>
			<tr
				><td>Comércio Mínimo</td>
				<td>U$1/R$4</td></tr
			>
			<tr
				><td>Tipos de conta</td>
				<td>Demonstração gratuita, Negociação, VIP</td></tr
			>
			<tr
				><td>Comércio móvel</td>
				<td>Sim. Para IoS e Android</td></tr
			>
			<tr
				><td>Programa de afiliados</td>
				<td>Sim.</td></tr
			>
			<tr
				><td>Suporte Eficaz</td>
				<td
					>24/7 por chat ao vivo, e-mail <a href="mailto:support@iqoption.com"
						>support@iqoption.com</a
					> ou telefone</td
				></tr
			>
		</table>
	</div>
	<p>
		Aqui tudo sobre IQ Option! A IQ Option é uma plataforma para negociação de centenas de CFDs e
		opções binárias. Com os programas de análise mais eficientes e uma equipe altamente qualificada,
		a IQ Option possui várias premiações e um crescimento contínuo no número de usuários ativos ano
		após ano. Junte-se a milhões de traders em todo o mundo!
	</p>
</section>

<div class="img-wrap">
	<section>
		<ImageWrap
			imageW={1280}
			imageH={777}
			path="/iq-award-5-pt.webp"
			fullImage={[1333, 809]}
			darkBgr
		/>
	</section>
</div>

<style>
	tr td:first-child {
		font-weight: 600;
		background-color: var(--secondary-bgr);
	}
	.table-wrap {
		margin-bottom: 40px;
		margin-top: 30px;
	}

	.img-wrap {
		background-color: #020300;
		padding: 40px 0;
		margin-top: 60px;
	}

	@media screen and (max-width: 600px) {
		.table-wrap {
			overflow: scroll;
		}
	}
</style>
