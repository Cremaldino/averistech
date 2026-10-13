document.addEventListener('DOMContentLoaded', () => {
    // 1. Inputs
    const inputMinutiDataEntry = document.getElementById('calc-data-entry');
    const valMinutiDataEntry = document.getElementById('val-data-entry');

    const inputMinutiRiconciliazione = document.getElementById('calc-riconciliazione');
    const valMinutiRiconciliazione = document.getElementById('val-riconciliazione');

    const inputRalOperatore = document.getElementById('calc-ral');
    const valRalOperatore = document.getElementById('val-ral');

    const inputNumDocumenti = document.getElementById('calc-docs');
    const valNumDocumenti = document.getElementById('val-docs');

    // Form pre-fill
    const formNumDocs = document.getElementById('form-docs');

    // 2. Outputs
    const outCanoneMensile = document.getElementById('out-canone-mensile');
    const outSpesaReale = document.getElementById('out-spesa-reale');
    const outCostoAttuale = document.getElementById('out-costo-attuale');
    const outGiorniPersi = document.getElementById('out-giorni-persi');
    const outTierInfo = document.getElementById('out-tier-info');
    const outRisparmioNetto = document.getElementById('out-risparmio-netto');
    const outRisparmioNettoMensile = document.getElementById('out-risparmio-netto-mensile');
    const outRisparmioPerc = document.getElementById('out-risparmio-perc');

    // Constants
    const moltiplicatoreCostoAzienda = 1.37;
    const oreLavorativeAnnue = 1920;
    const aliquotaDetrazioneFiscale = 0.279; // 27.9%

    // Lookup Table Piani di Licenza
    const pricingTable = [
        { max: 1000, cost: 0.20, canone: 200.00, nome: 'SMALL' },
        { max: 2000, cost: 0.175, canone: 350.00, nome: 'MEDIUM' },
        { max: 3500, cost: 0.157, canone: 550.00, nome: 'LARGE' },
        { max: 4500, cost: 0.211, canone: 950.00, nome: 'EXTRA' },
        { max: Infinity, cost: 0, canone: 0, nome: 'ENTERPRISE' }
    ];

    function getPricing(docs) {
        for (let i = 0; i < pricingTable.length; i++) {
            if (docs <= pricingTable[i].max) {
                return pricingTable[i];
            }
        }
        return pricingTable[pricingTable.length - 1];
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
    }

    function calculate() {
        const minDataEntry = parseFloat(inputMinutiDataEntry.value) || 3;
        const minRic = parseFloat(inputMinutiRiconciliazione.value) || 6;
        const ral = parseFloat(inputRalOperatore.value) || 20000;
        const docs = parseInt(inputNumDocumenti.value) || 500;

        // Update Labels
        valMinutiDataEntry.textContent = `${minDataEntry} min`;
        valMinutiRiconciliazione.textContent = `${minRic} min`;
        valRalOperatore.textContent = formatCurrency(ral);
        valNumDocumenti.textContent = `${docs} doc/mese`;

        // Update Form
        if (formNumDocs) formNumDocs.value = docs;

        // Math
        const costoAziendaPersona = ral * moltiplicatoreCostoAzienda;
        const costoOrarioPersona = costoAziendaPersona / oreLavorativeAnnue;

        const minutiTotaliDoc = minDataEntry + minRic;
        const minutiMeseTotali = docs * minutiTotaliDoc;
        const oreMesePersona = minutiMeseTotali / 60;
        const giorniLavoroMesePersona = oreMesePersona / 8;

        const costoMesePersona = oreMesePersona * costoOrarioPersona;
        const costoAnnoPersona = costoMesePersona * 12;

        const pricing = getPricing(docs);
        const costoUnitarioDoc = pricing.cost;

        // Usa direttamente il canone della fascia individuata, senza interpolare
        let canoneMensile = pricing.canone;

        const canoneAnno = canoneMensile * 12;

        const spesaRealeMese = canoneMensile * (1 - aliquotaDetrazioneFiscale);
        const spesaRealeAnno = spesaRealeMese * 12;

        const risparmioAnno = costoAnnoPersona - spesaRealeAnno;
        const risparmioPercentuale = (risparmioAnno / costoAnnoPersona) * 100;

        // Display results
        if (outTierInfo) outTierInfo.textContent = pricing.nome === 'ENTERPRISE' ? 'ENTERPRISE (Contattaci per dettagli)' : pricing.nome;

        outCostoAttuale.textContent = formatCurrency(costoMesePersona) + " /mese";
        outGiorniPersi.textContent = giorniLavoroMesePersona.toFixed(1) + " giorni/mese";

        if (pricing.nome === 'ENTERPRISE') {
            outCanoneMensile.textContent = "Preventivo ad hoc";
            outSpesaReale.textContent = "Preventivo ad hoc";
            outRisparmioNetto.textContent = "Su misura";
            outRisparmioNettoMensile.textContent = "Su misura";
            outRisparmioPerc.textContent = "Custom";

            // Remove colored classes for Enterprise
            outRisparmioNetto.classList.remove('saving', 'negative');
            outRisparmioNettoMensile.classList.remove('saving', 'negative');
            outRisparmioPerc.classList.remove('saving', 'negative');
        } else {
            outCanoneMensile.textContent = formatCurrency(canoneMensile) + " /mese";
            outSpesaReale.textContent = formatCurrency(spesaRealeMese) + " /mese";

            const risparmioMensile = risparmioAnno / 12;
            outRisparmioNetto.textContent = formatCurrency(risparmioAnno) + " ";
            outRisparmioNettoMensile.textContent = formatCurrency(risparmioMensile) + " /mese";
            outRisparmioPerc.textContent = risparmioPercentuale.toFixed(1) + "%";

            // Toggle negative class
            if (risparmioAnno < 0) {
                outRisparmioNetto.classList.remove('saving');
                outRisparmioNetto.classList.add('negative');
                outRisparmioNettoMensile.classList.remove('saving');
                outRisparmioNettoMensile.classList.add('negative');
                outRisparmioPerc.classList.remove('saving');
                outRisparmioPerc.classList.add('negative');
            } else {
                outRisparmioNetto.classList.remove('negative');
                outRisparmioNetto.classList.add('saving');
                outRisparmioNettoMensile.classList.remove('negative');
                outRisparmioNettoMensile.classList.add('saving');
                outRisparmioPerc.classList.remove('negative');
                outRisparmioPerc.classList.add('saving');
            }
        }
    }

    // Event Listeners
    [inputMinutiDataEntry, inputMinutiRiconciliazione, inputRalOperatore, inputNumDocumenti].forEach(input => {
        if (input) {
            input.addEventListener('input', calculate);
        }
    });

    // Preset Buttons
    const presetButtons = document.querySelectorAll('.calc-preset-btn');
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            presetButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const docsVal = btn.getAttribute('data-docs');
            if (docsVal && inputNumDocumenti) {
                inputNumDocumenti.value = docsVal;
                calculate();
            }
        });
    });

    // Initial calc
    calculate();
});

