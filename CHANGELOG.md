# Registro Turni — Note di rilascio

> A ogni release aggiornare insieme: `APP_VERSION` in `index.html` e `storico.html`, `CACHE_NAME` in `sw.js`, e questo file.

## v3.0.0 — 21/11/2026 · Stile ION

### Nuova veste grafica (immagine aziendale ION, come www.ion.srl)
- **Colori ION**: blu notte per intestazione e menu, navy per i pulsanti, sfondo carta chiaro; i colori restano modificabili da Impostazioni → Colori ("Ripristina colori ION" per tornare a quelli aziendali).
- **Carattere Montserrat incluso nell'app** (niente più Google Fonts: rispetto della privacy e funziona anche offline).
- **Icone a linea** al posto delle emoji in menu, pulsanti, titoli e impostazioni.
- Card con angoli ION (24 px), pulsanti più ampi, occhielli maiuscoli con trattino nelle impostazioni, contorno blu visibile quando si naviga da tastiera.
- **Logo nell'intestazione**: il logo caricato compare in alto, in bianco sullo sfondo scuro (se ha lo sfondo trasparente); su schermi stretti sostituisce la scritta "Turni".
- **Intestazione più bassa**: resta fissa solo la parte con logo, cloud e settimana; la riga "problemi / prossima settimana / Riempi automatico" scorre con la pagina.
- **"Copertura mancante" richiudibile**: mostra il numero di turni scoperti e si apre con "Mostra".
- **Immagine per WhatsApp e PDF in stile ION**: intestazione blu notte con logo bianco, Montserrat, una tinta ION per sede (Somma Lombardo navy, Busto Arsizio blu, Tradate lavanda, Oleggio grigio), piè di pagina ION.
- **Storico** con lo stesso stile.
- **Icona dell'app** ridisegnata nei colori ION.

### Bug corretti
- **Logo tagliato e annerito**: veniva ritagliato a quadrato e salvato in JPEG (i loghi orizzontali perdevano i lati e lo sfondo trasparente diventava nero). Ora mantiene proporzioni e trasparenza.
- **Zoom bloccato**: ora si può ingrandire la pagina con due dita.
- **Testi poco leggibili** ("+ aggiungi", "Chiuso"): contrasto portato sopra il minimo 4,5:1 (verificato su tutte le coppie di colori).
- **Pulsanti troppo piccoli** (Riempi automatico, prossima settimana, cloud, Giorno/Mat/Pom, ✕ del dipendente): ora almeno 44 px.

## v2.9.0 — 15/11/2026 · Ferie per periodo

- **Ferie per periodo (dal… al…)**: si apre dalla scheda Ferie di un giorno ("📅 Inserisci ferie per un periodo") o da Colleghi ("🏖 Ferie per un periodo").
  - Scegli collega, date di inizio e fine, giornata intera / solo mattina / solo pomeriggio, nota facoltativa.
  - Vale per tutti i giorni da lunedì a sabato del periodo (le domeniche sono escluse), anche su più settimane.
  - Anteprima prima di salvare: quanti giorni e quali turni già assegnati verranno liberati; chiede conferma.
  - **Togli ferie** sullo stesso periodo, anche solo per mezza giornata (es. togliere le mattine lascia l'assenza al pomeriggio).
- **Bug corretto**: salvando la scheda Ferie o un turno, le persone non più presenti nell'elenco dipendenti venivano cancellate da quel giorno senza avviso. Ora restano.

## v2.8.0 — 15/11/2026 · Immagine WhatsApp ridisegnata

- **Nuovo design**: ogni sede ha il suo colore (Somma Lombardo verde petrolio, Busto Arsizio blu cobalto, Tradate prugna, Oleggio ocra), con una scheda per sede, due per riga.
- **Intestazione** scura con le date della settimana in grande e una striscia nei quattro colori delle sedi.
- Nomi in etichette colorate più leggibili; orari della fascia sopra ogni turno; "chiuso" e "Agenzia chiusa" discreti; i turni scoperti sono segnati "da coprire".
- **Ferie e permessi** con le mezze giornate ("solo pomeriggio") e le note.
- In fondo: data e ora dell'ultimo aggiornamento dei turni, per capire subito se l'immagine è quella più recente.
- Nuovo carattere per titoli e numeri (Bricolage Grotesque).

## v2.7.0 — 15/11/2026 · Immagine per WhatsApp

- **Nuova immagine esportata**, uguale da telefono e da computer (larghezza fissa, alta risoluzione):
  - intestazione con logo e date della settimana;
  - due blocchi con **due sedi affiancate** (Somma Lombardo + Busto Arsizio, Tradate + Oleggio), mattina e pomeriggio per ogni giorno;
  - **orari** della fascia in ogni casella (es. 9–12, 14–16), turni chiusi in grigio, turni scoperti segnati con "—";
  - riquadro **Ferie e permessi** con mezze giornate e note.
- L'immagine non contiene più i pannelli interni (sovrapposizioni, copertura mancante) né i pulsanti dell'app.
- Lo sfondo segue la palette colori scelta.
- **Copia negli appunti su iPhone/iPad**: corretta (prima Safari poteva bloccarla).
- Il PDF usa lo stesso layout.

## v2.6.0 — 15/11/2026 · Orari reali per agenzia

- **Orari diversi per agenzia e giorno**, impostati sugli orari reali:
  - Somma Lombardo: lun–ven 9–12 e 14–17, sabato 9–12
  - Busto Arsizio: lun–ven 9–12 e 14–16, sabato 9–12
  - Tradate: lun–sab 9–12, mercoledì anche 14–16
  - Oleggio: lun, mer, ven 9–12; mar, gio 9–12 e 14–16; sabato chiuso
- I messaggi WhatsApp e il calendario .ics dei colleghi usano gli orari dell'agenzia di quel giorno.
- Gli orari decidono anche quali turni sono aperti: niente più avvisi di "copertura mancante" sui pomeriggi chiusi, e il riempimento automatico non assegna turni dove l'agenzia è chiusa.
- **Impostazioni → Aperture e orari agenzie**: per ogni agenzia e giorno si spunta mattina/pomeriggio e si modificano gli orari. Chiudendo un turno con persone già assegnate l'app chiede conferma prima di toglierle.
- Le assenze di mezza giornata nel calendario usano la fascia oraria delle agenzie aperte quel giorno.
- Le precedenti "aperture agenzie" vengono sostituite dagli orari reali; i turni già assegnati in fasce ora chiuse restano visibili come "⚠ Chiuso ma assegnato".

## v2.5.0 — 15/11/2026 · Ferie a mezza giornata

- **Ferie/permessi per giornata, mattina o pomeriggio**: nella scheda Ferie ogni persona ha i pulsanti *Giorno*, *Mat*, *Pom* (tocca di nuovo per togliere).
- Salvando, la persona viene tolta solo dai turni coperti dall'assenza (es. ferie al mattino → resta assegnata al pomeriggio).
- **Nuovo errore**: se qualcuno risulta assegnato a un turno coperto dalle sue ferie (es. dati arrivati da un altro dispositivo), compare nel riquadro "⚠ Sovrapposizioni e ferie", la casella diventa rossa e il contatore in alto lo segnala.
- Nella scelta del turno la persona è disattivata solo per il turno in cui è assente, con l'indicazione "in ferie (mattina)".
- Riempimento automatico e Duplica settimana rispettano le assenze parziali.
- Turni del collega: messaggio WhatsApp e calendario .ics mostrano anche le ferie di mezza giornata.
- Le assenze parziali sono indicate con "mat"/"pom" accanto al nome, anche nello storico.
- Compatibilità: un dispositivo con una versione precedente vede l'assenza parziale come giornata intera finché non si aggiorna.

## v2.4.0 — 15/11/2026 · Novità

### ✨ Riempimento automatico
- Nuovo pulsante **"✨ Riempi automatico"** sotto la settimana.
- Compila solo i turni aperti ancora vuoti (o con meno persone del previsto): quelli già compilati non vengono toccati.
- Rispetta sedi assegnate, ferie/permessi, aperture standard e orari straordinari, e non crea sovrapposizioni.
- Distribuisce i turni in modo equo: prima chi ne ha meno questa settimana, poi chi ha quella sede assegnata, poi chi ne ha fatti meno nelle ultime 4 settimane.
- Persone per turno: "come nelle ultime settimane" (mediana delle ultime 8 settimane compilate) oppure 1, 2 o 3.
- Dopo il riempimento compare **"Annulla"** per tornare indietro con un tocco.

### 👥 Turni del collega
- Nuovo pulsante **"Colleghi"** nella barra in basso.
- Mostra i turni di una persona per la settimana visualizzata o per 4 settimane, con ferie e giorni liberi.
- **Invia su WhatsApp** (al numero del collega, se inserito), **Copia testo**, **Scarica calendario (.ics)** da aprire in Google Calendar, Outlook o iPhone.
- Orari di mattina e pomeriggio modificabili (predefiniti 09:00–13:00 e 14:30–19:00); vengono sincronizzati con gli altri dispositivi.

## v2.3.1 — 15/11/2026 · Correzione bug minori

- **Rimozione dipendente**: ora chiede conferma (prima bastava un tocco sulla ✕).
- **Nomi simili** (es. "Anna M." e "Anna M"): toccando un nome non si spunta più l'altro.
- **Backup "Esporta memoria"**: risulta fatto solo se il file viene davvero condiviso o scaricato, non se annulli.
- **Settimane solo visitate**: non vengono più salvate né caricate su Drive (file più leggero).

## v2.3.0 — 15/11/2026 · Correzione bug

### Sincronizzazione Google Drive
- **Niente più dati vecchi da Drive**: il service worker non mette più in cache le chiamate a Google Drive/OAuth (prima "Sincronizza" e "Scarica da Drive" potevano ricevere sempre la prima versione scaricata e sovrascrivere il cloud).
- **Unione delle modifiche settimana per settimana**: se due dispositivi modificano settimane diverse, la sincronizzazione le tiene entrambe. Per la stessa settimana vince la modifica più recente. Dipendenti, colori, aperture e logo hanno un loro timestamp separato.
- **Settimane eliminate**: l'eliminazione dallo storico viene registrata e non viene più fatta ricomparire dalla sincronizzazione.
- **Sessione Google scaduta**: dopo circa un'ora l'accesso viene rinnovato automaticamente al successivo comando, invece di dare "HTTP 401".
- **Niente finestra Google all'avvio** (veniva bloccata dal browser): se l'account era collegato, l'intestazione mostra "☁️ Tocca per sincronizzare" e un tocco riconnette e sincronizza.
- Le informazioni di collegamento di un dispositivo non vengono più copiate sugli altri.

### Turni
- **Turni chiusi con persone assegnate**: ora sono visibili ("⚠ Chiuso ma assegnato") e si possono aprire per togliere le persone.
- **Cambio orari standard**: se un turno diventa chiuso, l'app avvisa ed elimina le assegnazioni da questa settimana in avanti (lo storico passato non viene toccato).
- **Duplica settimana**: copia solo i turni; non copia più ferie/permessi; mantiene ferie e orari straordinari della settimana di destinazione; salta i turni chiusi e chi è in ferie.

### Storico
- **"Importa memoria" nello storico è in sola consultazione**: non sostituisce più i dati dell'app.
- L'app principale si aggiorna da sola se lo storico (o un'altra scheda) modifica i dati.
- Versione allineata con l'app.

### Varie
- Icone spostate nella cartella `icons/` (prima mancavano nell'app installata).
