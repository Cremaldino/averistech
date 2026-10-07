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
    const outCostoUnitario = document.getElementById('out-costo-unitario');
    const outCanoneMensile = document.getElementById('out-canone-mensile');
    const outSpesaReale = document.getElementById('out-spesa-reale');
    const outCostoAttuale = document.getElementById('out-costo-attuale');
    const outGiorniPersi = document.getElementById('out-giorni-persi');
    const outRisparmioNetto = document.getElementById('out-risparmio-netto');
    const outRisparmioNettoMensile = document.getElementById('out-risparmio-netto-mensile');
    const outRisparmioPerc = document.getElementById('out-risparmio-perc');

    // Constants
    const moltiplicatoreCostoAzienda = 1.37;
    const oreLavorativeAnnue = 1920;
    const aliquotaDetrazioneFiscale = 0.279; // 27.9%

    // Lookup Table
    const pricingTable = [
        { max: 100, cost: 0.90, canone: 180.00 },
        { max: 200, cost: 0.90, canone: 180.00 },
        { max: 300, cost: 0.90, canone: 320.00 },
        { max: 400, cost: 0.90, canone: 360.00 },
        { max: 500, cost: 0.90, canone: 450.00 },
        { max: 600, cost: 0.80, canone: 480.00 },
        { max: 700, cost: 0.80, canone: 560.00 },
        { max: 800, cost: 0.80, canone: 640.00 },
        { max: 900, cost: 0.80, canone: 720.00 },
        { max: 1000, cost: 0.80, canone: 800.00 },
        { max: 1100, cost: 0.55, canone: 605.00 },
        { max: 1200, cost: 0.55, canone: 660.00 },
        { max: 1500, cost: 0.50, canone: 750.00 },
        { max: 2000, cost: 0.70, canone: 1400.00 }, // From instructions
        { max: 2500, cost: 0.40, canone: 1000.00 },
        { max: 3000, cost: 0.60, canone: 1800.00 },
        { max: 3500, cost: 0.40, canone: 1400.00 },
        { max: 4000, cost: 0.50, canone: 2000.00 },
        { max: 4500, cost: 0.40, canone: 1800.00 },
        { max: 5000, cost: 0.45, canone: 2250.00 },
        { max: 7000, cost: 0.40, canone: 2800.00 }
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
        
        // As requested: Canone Mensile = num_documenti_mese * costo_unitario_documento
        // Minimum 180
        let canoneMensile = docs * costoUnitarioDoc;
        if (canoneMensile < 180) {
            canoneMensile = 180;
        }
        
        const canoneAnno = canoneMensile * 12;

        const spesaRealeMese = canoneMensile * (1 - aliquotaDetrazioneFiscale);
        const spesaRealeAnno = spesaRealeMese * 12;

        const risparmioAnno = costoAnnoPersona - spesaRealeAnno;
        const risparmioPercentuale = (risparmioAnno / costoAnnoPersona) * 100;

        // Display results
        outCostoUnitario.textContent = formatCurrency(costoUnitarioDoc) + " /doc";
        outCanoneMensile.textContent = formatCurrency(canoneMensile) + " /mese";
        outSpesaReale.textContent = formatCurrency(spesaRealeMese) + " /mese";
        outCostoAttuale.textContent = formatCurrency(costoMesePersona) + " /mese";
        outGiorniPersi.textContent = giorniLavoroMesePersona.toFixed(1) + " giorni/mese";
        
        const risparmioMensile = risparmioAnno / 12;

        outRisparmioNetto.textContent = formatCurrency(risparmioAnno) + " /anno";
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

    // Event Listeners
    [inputMinutiDataEntry, inputMinutiRiconciliazione, inputRalOperatore, inputNumDocumenti].forEach(input => {
        if (input) {
            input.addEventListener('input', calculate);
        }
    });

    // Initial calc
    calculate();
});
