# Registro Turni — Note di rilascio

> A ogni release aggiornare insieme: `APP_VERSION` in `index.html` e `storico.html`, `CACHE_NAME` in `sw.js`, e questo file.

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
