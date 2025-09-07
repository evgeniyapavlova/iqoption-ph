<script>
	import Accordion from './common/Accordion.svelte';
	const items = [
		{
			q: 'Libre ba ang IQ Option Philippines?',
			a: 'Oo. Talagang libre ang pagbubukas ng account sa IQ Option, at puwede kang magsimula sa pamamagitan ng isang libreng demo account na pinopondohan ng $10,000 na virtual na pera. Kailangan ng totohanang pag-trade ng minimum na depositong $10 USD lang.'
		},
		{
			q: 'Isa bang scam ang IQ Option?',
			a: 'Hindi. Nag-o-operate na ang IQ Option simula pa noong 2014, at nagbibigay-serbisyo ito sa milyon-milyong trader sa buong mundo. Kontrolado ito ng Cyprus Securities and Exchange Commission (CySEC) para sa mga operasyon sa Europe at sumusunod sa mahihigpit na pamantayang operasyonal, panseguridad, at transparency.'
		},
		{
			q: 'Mapagkakatiwalaan ba ang IQ Option?',
			a: 'Oo. Gumagamit ang IQ Option ng SSL encryption, iniingatan nito ang mga pera ng kliyente sa mga nakabukod na account, at nagpapanatili ng malilinaw na tuntunin at kundisyon. Mayroon itong subok nang track record ng pagiging maaasahang pag-execute ng trade at secure na pagproseso ng bayad.'
		},
		{
			q: 'Lehitimo ba ang IQ Option Philippines?',
			a: 'Oo. Legal na magagamit ng mga trader na Filipino ang IQ Option. Dapat na sumunod ang mga trader sa anumang lokal na kinakailangan sa pagbubuwis o pag-uulat tungkol sa kita sa pag-trade.'
		},
		{
			q: 'Ligtas ba ang IQ Option?',
			a: 'Oo. Gumagamit ang IQ Option ng malalakas na hakbang sa seguridad, kabilang ang two-factor authentication (2FA), mga naka-encrypt na transaksyon, at hiwalay na storage para sa pera ng kliyente para masiguro ang proteksyon laban sa panloloko at hindi awtorisadong pag-access.'
		},
		{
			q: 'Parehong kumpanya ba ang IQ Option at IQ Broker?',
			a: 'Oo. Ang IQ Broker ay ang parent brand, at ang IQ Option ay trading platform na nag-o-operate sa ilalim ng brand na iyon. Ang dalawang pangalang ito ay tumutukoy sa parehong kumpanya at serbisyo.'
		}
	];
</script>

<section>
	<h2>FAQ</h2>

	{#each items as item, idx}
		{#if idx === 0}
			<Accordion open {item} />{:else}<Accordion {item} />{/if}
	{/each}
</section>
