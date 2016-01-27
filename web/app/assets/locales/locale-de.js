module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "Español",
        tr: "Turkish"
    },
    header: {
        title: "OpenLedger",
        account: "Konto",
        dashboard: "Übersicht",
        explorer: "Explorer",
        exchange: "Börse",
        payments: "Transaktionen", // temporary, once we have tabs on Payments, I'll change it back to payments (Valentine)
        logout: "Abmeldung",
        settings: "Einstellungen",
        current: "Aktives Konto",
        create_account: "Konto erstellen",
        create_asset: "Asset erstellen",
        update_asset: "Asset ändern",
        lock: "Sperren",
        unlock: "Entsperren",
        help: "Hilfe",
        locked_tip: "Geldbörse ist gesperrt. Klicken zum Entsperren.",
        unlocked_tip: "Geldbörse ist entsperrt. Klicken zum Sperren."
    },
    propose: "vorschlagen",
    cancel: "abbrechen",
    account: {
        welcome: "Willkommen",
        asset: "Asset",
        market_value: "Marktwert",
        hour_24: "24hr Wechsel",
        recent: "Letzte Aktivität",
        name: "Konto Name",
        id: "Konto ID",
        more: "mehr",
        deposit_withdraw: "Aufladen/Abheben",
        as_collateral: "Kollateral",
        open_orders: "Offene Order",
        total_value: "Gesamtwert",
        whitelist: {
            title: "Weißliste",
            black: "Schwarzliste",
            add: "Zur Weißliste hinzufügen",
            add_black: "Zur Schwarzliste hinzufügen",
            empty: "%(account)s hat keine Konten in seiner Weißliste.",
            empty_black: "%(account)s hat keine Konten in seiner Schwarzliste-",
            white_by: "Weißgelisted durch",
            black_by: "Schwarzgelisted durch",
            empty_white_by: "Keine accounts haben %(account)s weißgelisted.",
            empty_black_by: "Keine accounts haben %(account)s schwarzgelisted."
        },
        vesting: {
            title: "Zusicherungen",
            balance_number: "Guthaben #%(id)s",
            no_balances: "Dieses Konto hat kein zugesichertes Guthaben"
        },
        member: {
            stats: "Mitgliederstatistiken",
            join: "Beitritt am",
            registrar: "Registriert von",
            referrer: "Empfohlen von",
            lifetime_referrer: "Lifetime Referrer",
            network_percentage: "Netzwerk",
            fee_allocation: "Gebührenverteilung",
            membership: "Mitgliedschaft",
            fees_paid: "Lifetime bazahlte Gebühren",
            fees_pending: "unbestätigte Gebühren",
            fees_vested: "Anstehnde Gebühren in Sperrfristguthaben",
            referrals: "Empfehlungen",
            rewards: "Belohnungen",
            cashback: "Skonto",
            vested: "Zugesichert",
            unknown: "unbekanntes Mitglied",
            lifetime: "Lifetime Mitglied",
            basic: "Grundmitglied",
            annual: "Jahresabonent",
            upgrade_lifetime: "Lifetime Mietgliedschaft erwerben",
            subscribe: "Jährliche Mitgliedschaft erwerben",
            expires: "endet",
            membership_expiration: "Ablauf der Mitgliedschaft",
            fees_cashback: "Gebühren und Rückerstattung",
            coindays: "Coin-days",
            earned: "Erworbene coin-days",
            required: "Benötigte coin-days",
            remaining: "Übriger Zusicherungswartezeit",
            claim: "Guthaben beanspruchen",
            available: "Zur Beanspruchung verfügbar"
        },
        user_issued_assets: {
            symbol: "Symbol",
            name: "Asset Name",
            description: "Beschreibung",
            max_supply: "Maximale Verfügbarkeit",
            precision: "Genauigkeit",
            to: "An Konto emittieren",
            market_fee: "Marktgebühr",
            max_market_fee: "Max. Marktgebühr",
            details: "Details",
            primary: "Primäreinstellungen",
            optional: "Optionales",
            approx_fee: "Geschätze Gebühr",
            exists: "Dieses Asset existiert bereits",
            max_positive: "Maximale Verfügbarkeit muss eine positive Zahl sein!",
            core_exchange_rate: "Kernwechselrate",
            quote: "Quote Menge",
            quote_name: "Quote Asset",
            base: "Base Menge",
            base_name: "Base Asset",
            update_owner: "Eigentümer aktualisieren",
            current_issuer: "Aktueller Eigentümer",
            new_issuer: "Neues Eigentümerkonto",
            flags: "Schalter",
            charge_market_fee: "Marktgebühren aktivieren",
            override_authority: "Herausgeber darf Anteile zurückholen",
            transfer_restricted: "Herauseber muss alle Transfers genehmigen",
            disable_confidential: "Verbiete vertrauliche Transfers",
            white_list: "Setze Whitelisting eines Eigentümers vorraus",
            witness_fed_asset: "Erlaube Witnesses einen Feed bereit zustellen",
            committee_fed_asset: "Erlaube Kommittee einen Feed bereit zustellen",
            disable_force_settle: "Deaktiviere Zwangs-Settlements",
            global_settle: "Erlaube Herausgeber ein Globales Settlement zu erzwingen",
            advanced: "Fortgeschrittene",
            need_asset: "Zumindest eines der Assets muss %(name)s sein",
            perm_warning: "WARNUNG: Rechte können nur abgeschalten werden. Einmal abgeschalten, lassen Sie sich nicht re-aktivieren!",
            issued_assets: "Herausgegebene Assets"
        },
        connections: {
            known: "Bekannt von",
            "black": "Schwarzgelistet von"
        },
        perm: {
            active: "Aktive Berechitigungen",
            owner: "Eigentümer Berechtigungen",
            memo_key: "Memo key",
            publish: "Änderungen veröffentlichen",
            reset: "Zurücksetzen",
            add: "Berechtigung hinzufügen",
            type: "Typ",
            key: "Schlüssel/Name",
            weight: "Gewicht",
            threshold: "Schwellwert",
            confirm_add: "Hinzufügen",
            cancel: "Abbrechen",
            add_permission_label: "Geben Sie den Kontoname/Schlüssel und eine Gewichtung an",
            account_name_or_key: "Kontoname oder Schlüssel",
            memo_public_key: "Öffentlicher Schlüssel für Memos",
            warning1: "Active permissions weights total of %(weights_total)s should be equal or exceed threshold of %(threshold)s",
            warning2: "Owner permissions weights total of %(weights_total)s should be equal or exceed threshold of %(threshold)s",
            warning3: "Account is already in the list",
            warning4: "Key is already in the list",
            action: "Action",
            acct_or_key:" Account/Key"
        },
        votes: {
            proxy_short: "Proxy",
            workers_short: "Worker",
            proxy: "Proxy Konto",
            no_proxy: "Keine Vermittlung",
            clear_proxy: "Proxy entfernen",
            name: "Name",
            info: "Info",
            votes: "Stimmen",
            url: "Webseite",
            support: "Support",
            workers: "Budgetpunkte",
            publish: "Änderungen bekanntgeben",
            add_witness: "Hinzufügen",
            remove_witness: "Entfernen",
            remove_committee: "Entfernen",
            add_committee: "Hinzufügen",
            add_committee_label: "Mitglied des Komitees",
            add_witness_label: "Witness",
            approve_worker: "Budgetpunkt bestätigen",
            reject_worker: "Budgetpunkt ablehnen",
            worker_account: "Worker-Konto",
            total_votes: "Gesamtstimmen",
            votes_against: "Gegenstimmen",
            daily_pay: "Tagessold",
            daily: "täglich",
            max_pay: "Maximaler Tagessold",
            unclaimed: "nicht ausbezahlter Sold",
            status: {
                title: "Status",
                supported: "Pro",
                rejected: "Contra",
                neutral: "Neutral"
            },
            start: "Start Datum",
            end: "End Datum",
            creator: "Besitzer",
            recycled: "Recycelt",
            funding: "Auszahlend",
            total_budget: "Gesamtes Worker Budget",
            unused_budget: "Ungenutztes Worker Budget",
        },
        options: {
            num_witnesses : "Gewünschte Anzahl Witnesses",
            num_committee : "Gewünschte Größe des Komitees",
            memo_key : "Memo Schlüssel",
        },
        upgrade: "Konto erweitern",
        unfollow: "Unfollow",
        follow: "Follow",
        pay: "Bezahlen",
        overview: "Übersicht",
        bts_market: "Markt",
        history: "Historie",
        payees: "Empfänger",
        permissions: "Berechitigungen",
        voting: "Abstimmung",
        orders: "Anweisungen",
        select_placeholder: "Konto auswählen...",
        errors: {
            not_found: "Das Konto %(name)s existiert nicht. Bitte prüfgen Sie die Schreibweise!",
            invalid: "Üngültiger Kontoname",
            unknown: "Unbekannter Kontoname",
            not_yours: "Nicht Ihr Konto"
        },
        collaterals: "Kollateral Positionen",
        eq_value: "entspricht",
        percent: "Prozent der Gesamtmenge",
        please_create_account: "Bitte erstellen Sie ein Konto",
        create_account: "Konto erstellen",
        identicon: "Identicon",
        pay_from: "Bezahlen von",
        existing_accounts: "Existierendes Konto",
        name_input: {
            name_is_taken: "Kontoname bereits vergeben.",
            not_found: "Konto nicht gefunden.",
            premium_name_faucet: "Es handelt sich um einen Premiumnamen. Premiumnamen sind teurer und können nicht gratis durch das Faucet registriert werden. Nutzen Sie einen Namen der mindestens einen Bindestrich, eine Zahl, oder keine Vokal enthält.",
            premium_name_warning: "Es handelt sich um einen Premiumnamen. Premiumnamen sind teurer. Günstige Namen enthalten mindestens einen Bindestrich, eine Zahl, oder keine Vokal enthält.",
        },
        propose_from: "Vorschlagen von",
        settle: "Settle",
        "no_orders": "Keine offenen Order",
        asset_details: "Asset Details"
    },
    pagination: {
        newer: "Jüngere",
        older: "Ältere"
    },
    transfer: {
        from: "Von",
        pay_from: "Bezahlen von",
        amount: "Betrag",
        to: "Zu",
        memo: "Memo",
        fee: "Gebühr",
        send: "Senden",
        final: "Abschließendes Guthaben",
        balances: "Guthaben",
        available: "Verfügbar: ",
        errors: {
            req: "Plfichtfeld",
            pos: "Betrag darf nicht negativ sein",
            valid: "Bitte geben Sie einen positiven Betrag ein",
            balance: "Ihr abschließendes Guthaben kann nicht negativ sein!",
            insufficient: "Ungenügende Bilanz"
        },
        back: "ZURÜCK",
        confirm: "BESTÄTIGEN",
        broadcasting: "Übermittle...",
        broadcast: "Deine Überweisung wurde gesendet",
        again: "WEITERE ÜBERWEISUNG",
        see: "ÜBERWEISUNGSÜBERSICHT",
        close: "SCHLIEßEN",
        memo_unlock: "Entsperren um Memo zu lesen"
    },
    operation: {
        pending: "schwebend %(blocks)s Blöcke",
        no_recent: "keine kürzlichen Transaktionen",
        reg_account: "{registrar} hat das Konto {newaccount} registriert",
        transfer: "{from} hat {amount} an {to} gesendet",
        proposal_create: "{account} hat Transaktion vorgeschlagen",
        proposal_update: "{account} hat Transaktionsvorschlag geändert",
        proposal_delete: "{account} hat Transaktionsvorschlag gelöscht",
        fill_order: "{account} kaufte {received} für {price}",
        vesting_balance_withdraw: "{account} hat zugesichertes Guthaben {amount} beansprucht",
        balance_claim: "{account} hat Guthaben von {amount} beansprucht",
        publish_feed: "{account} hat Preis-Feed von {price} veröffentlicht",
        set_proxy: "{account} hat {proxy} als seinen Proxy eingestellt",
        update_account: "{account} hat seine Kontodetails aktualisiert",
        limit_order_sell: "{account} hat eine Verkaufsorder für {amount} bei {price} eingestellt",
        limit_order_buy: "{account} hat eine Kaufsorder für {amount} bei {price} eingestellt",
        limit_order_cancel: "{account} hat order #%(order)s zurückgezogen",
        call_order_update: "{account} hat nun {debt} {debtSymbol} Schulden bei einem Kollateral von {collateral}",
        asset_reserve: "{account} hat {amount} zurückgelegt",
        asset_issue: "{account} hat {amount} an {to} herausgegeben",
        asset_create: "{account} hat das Asset {asset} erzeugt",
        asset_update: "{account} hat das Asset {asset} aktualisiert",
        lifetime_upgrade_account: "{account} hat eine Lebenslange Mitgliedschaft gekauft",
        annual_upgrade_account: "{account} hat ein Jahresabo gekauft",
        unlisted_by: "{lister} hat {listee} von der Liste gestrichen",
        whitelisted_by: "{lister} hat Kotno {listee} weißgelistet",
        blacklisted_by: "{lister} hat Konto {listee} schwarzgelistet",
        transfer_account: "Konto {account} wurde an {to} übertragen",
        asset_update_feed_producers: "{account} hat die Feed-Erzeuger für {asset} aktualisiert",
        asset_fund_fee_pool: "{account} hat {amount} in den Gebührenpool von  {asset} transferiert",
        asset_settle: "{account} hat ein Settlement von {amount} beantragt",
        asset_global_settle: "{account} hat ein globales Settlement von {asset} bei {price} beantragt",
        witness_create: "{account} ist jetzt ein Witness",
        witness_update: "{account} hat seine Witness aktualisiert",
        witness_pay: "{account} hat Witness-Guthaben eingezogen.",
        witness_receive: "Received witness from {witness}",
    },
    transaction: {
        confirm: "Bitte bestätigen Sie die Transaktion",
        broadcast_success: "Transaktion wurde übermittelt",
        transaction_confirmed: "Transaktion bestätigt",
        broadcast_fail: "Bei der Übermittlung der Transaction ist ein Fehler aufgetreten: %(message)s",
        broadcasting: "Übermittle Transaction..",
        broadcasting_short: "Übermittle..",
        sent: "Gesendet",
        to: "an",
        received: "Empfangen",
        from: "von",
        amount_sell: "Betrag",
        expiration: "Frist",
        fill_or: "sofortige Ausführung oder Annullierung",
        min_receive: "Mindestbetrag",
        seller: "Verkäufer",
        collateral: "Sicherheit/Pfand",
        coll_ratio: "Anfängliche Sicherheit (Verhältnis)",
        coll_maint: "Unterhalt der Sicherheit (Verhältnis)",
        "create_key": "Ein öffentlicher Schlüssel wurde erzeugt",
        at: "für",
        coll_of: "mit einer Sicherheit bestehend aus",
        feed_producer: "Werde Feed-Erzeuger für ein Asset",
        feed_price: "Feed Preis",
        by: "von",
        burn_asset: "Vernichtet",
        fund_pool: "Asset-Gebührenpool finanziert mit",
        committee_member_create: "Komitee Mitglied erstellen",

        withdraw_permission_create: "Einzugsermächtigung wurde verliegen an Konto",
        withdraw_permission_update: "Einzugsermächtigung wurde aktualisiert für Konto",
        withdraw_permission_claim: "Einzugsermächtigung wurde eingefordert für Konto",
        withdraw_permission_delete: "Einzugsermächtigung wurde aufgehoben für Konto",
        paid: "Bezahlt",
        obtain: "zu erhalten",
        global_parameters_update: "Globale Parameter aktualisiert",
        file_write: "Eine Datei wurde geschrieben",
        vesting_balance_create: "Ein Sperrfristguthaben wurde erzeugt",
        for: "für",
        bond_create_offer: "Ein Bondangebot wurde erstellt",
        bond_cancel_offer: "Ein Bondangebot wurde abgebrochen",
        bond_accept_offer: "Ein Bondangebot wurde akzeptiert",
        bond_claim_collateral: "Eine Sicherheit wurde eingefordert",
        bond_pay_collateral: "Eine Sicherheit wurde bezahlt",
        create_worker: "Ein Budgetpunkt wurde erzeugt. Bezahlung",
        custom: "Eine benutzerdefinierte Operation wurde definiert",
        order_id: "Anweisungskennung (ID)",
        asset_claim_fees: "Assetgebühren von %(balance_amount)s aus %(asset)s Gebührenpool entnommen.",
        balance_owner: "Guthabeneigentümer",
        balance_id: "Guthaben ID",
        deposit_to: "In Konto einzahlen",
        claimed: "Insgesamt beansprucht",
        borrow_amount: "Schuld",
        funding_account: "Bezahlendes Konto",
        delta_collateral: "Änderung des Kollateral",
        delta_debt: "Änderung der Schuld",
        new_url: "Webseite",
        publisher: "Publisher",
        market_fee: "Marktgebühr",
        max_market_fee: "Maximale Marktgebühr",
        blinding_factor: "Blinding Faktor",
        outputs: "Ausgänge",
        inputs: "Eingänge",
        settlement_date: "Settlement Datum",
        asset_reserve: "Rücklagen",
        trxTypes: {
            transfer: "Überweisung",
            limit_order_create: "Limit-Order",
            limit_order_cancel: "Limit-Order abbrechen",
            call_order_update: "Call-Order aktualisieren",
            account_create: "Konto erstellen",
            account_update: "Kontoaktualisierung",
            account_whitelist: "Konto Positivliste",
            account_upgrade: "Konto Upgrade",
            account_transfer: "Konto Überweisung",
            asset_create: "Asset erstellen",
            asset_update: "Asset aktualisieren",
            asset_update_bitasset: "SmartCoin aktualisieren",
            asset_update_feed_producers: "Asset Feederzeuger aktualisieren",
            asset_issue: "Asset emittieren",
            asset_reserve: "Assetanteile vernichten",
            asset_fund_fee_pool: "Asset Gebührenpool finanzieren",
            asset_settle: "Asset Settlement",
            asset_global_settle: "Globales Asset Settlement",
            asset_publish_feed: "Asset Feed publiszieren",
            committee_member_create: "Komiteemitglied erstellen",
            committee_member_update : "Komiteemitglied editieren",
            witness_create: "Witness erstellen",
            witness_update: "Witness ändern",
            witness_withdraw_pay: "Witnesslohn ausbezahlen",
            proposal_create: "Proposal erstellen",
            proposal_update: "Proposal aktualisieren",
            proposal_delete: "Proposal löschen",
            withdraw_permission_create: "Einzugsermächtigung erstellen",
            withdraw_permission_update: "Einzugsermächtigung aktualisiert",
            withdraw_permission_claim: "Einzugsermächtigung eingefordert",
            withdraw_permission_delete: "Einzugsermächtigung aufgehoben",
            fill_order: "Order ausgeführt",
            committee_member_update_global_parameters: "Globale Parameters aktualisiert",
            vesting_balance_create: "Sperrfristguthaben erstellt",
            vesting_balance_withdraw: "Sperrfristguthaben eingefordert",
            worker_create: "Budgetpunkt erstellt",
            custom: "benutzerdefiniert",
            assert: "Assert Pperation",
            balance_claim: "Guthaben eingefordert",
            override_transfer: "Transaktion überschreiben",
            transfer_to_blind: "Transfer zu blinden Konten",
            blind_transfer: "Blind Transfer",
            transfer_from_blind: "Transfer von blindem Konto",
            asset_claim_fees: "Gebühr für 'Asset beanspruchen'"
        },
        feeGroups : {
         general : "Allgemein",
         asset   : "Asset-spezifisch",
         market  : "Markt-spezifisch",
         account : "Konto-spezifisch",
         business: "Unternehmensführung",
        },
        feeTypes: {
            _none : "gratis",
            fee : "Reguläre Gebühr",
            price_per_kbyte: "Preis pro KByte Transaktionsgröße",
            basic_fee : "Grundgebühr",
            premium_fee : "Premium Name",
            membership_annual_fee : "Jahresabonement",
            membership_lifetime_fee : "Lebenslanges Abonement",
            symbol3 : "Symbol mit 3 Zeichen",
            symbol4 : "Sybmol mit 4 Zeichen",
            long_symbol : "Längere Symbol"
        },
        whitelist_states: {
            no_listing: "Nicht gelistet",
            white_listed: "weißgelistet",
            black_listed: "schwarzgelistet",
            white_and_black_listed: "scharz- und weißgelistet"
        }
    },
    explorer: {
        accounts: {
            title: "Konten"
        },
        blocks: {
            title: "Blockchain",
            globals: "Globale Einstellungen",
            recent: "Letzte Blöcke",
            trx: "Transaktion",
            block_times: "Block Zeiten",
            block_time: "Block Zeit",
            transactions: "# an Transaktionen",
            recently_missed_blocks: "kürzlich verpasste Transaktionen",
            trx_per_block: "Trx/block",
            active_committee_members: "Aktive Kommittee Mitglieder",
            active_witnesses: "Aktive Witnesses",
            avg_conf_time: "mittlere Bestätigungszeit",
            trx_per_sec: "Trx/s",
            last_block: "Letzter Block",
            current_block: "Aktueller Block"

        },
        block: {
            title: "Block",
            id: "Block ID",
            witness: "Witness",
            count: "Transaktionszähler",
            date: "Datum",
            time: "Zeit",
            previous: "Vorherige",
            previous_secret: "Vorheriges Geheimnis",
            next_secret: "Hash des nächsten Geheimnisses",
            op: "Aktion",
            trx: "Transaktion",
            op_type: "Aktionstyp",
            fee_payer: "Gebührenkonto",
            key: "Öffentlicher Schlüssel",
            transactions: "Anzahl der Transaktionen",
            account_upgrade: "Kontoerweiterung",
            lifetime: "Lebenslanges Mitglied werden",
            authorizing_account: "Kontovollmacht",
            listed_account: "Kontenübersicht",
            new_listing: "Neuer Eintrag",
            asset_update: "zu aktualisierender Asset",
            common_options: "Common Optionen",
            new_options: "New Option",
            new_producers: "Neue Feederzeuger",
            asset_issue: "Zu emittierender Betrag",
            max_margin_period_sec: "Max Margin Periode (s)",
            call_limit: "Call-Limit",
            short_limit: "Short-Limit",
            settlement_price: "Settlement-Preis"
        },
        assets: {
            title: "Assets",
            market: "SmartCoins",
            user: "User Issued Assets",
            symbol: "Symbol",
            id: "ID",
            issuer: "Herausgeber",
            precision: "Genauigkeit"
        },
        asset: {
            title: "Asset",
            not_found: "Das Asset %(name)s existiert nicht",
            summary: {
                asset_type: "Asset Typ",
                issuer: "herausgeber",
                current_supply: "Aktuelle Verfügbarkeit",
                stealth_supply: "Versteckte Verfügbarkeit",
                market_fee: "Marktgebühr",
                max_market_fee: "Maximale Marktgebühr"
            },
            price_feed: {
                price_feed: "Preis Feed",
                settlement_price: "Settlement Preis",
                maintenance_collateral_ratio: "Maintenance Kollateral Verhältnis",
                maximum_short_squeeze_ratio: "Maximum short squeeze Verhältnis"
            },
            fee_pool: {
                fee_pool: "Gebühren Pool",
                core_exchange_rate: "Kernhandelsrate",
                pool_balance: "Pool Guthaben",
                unclaimed_issuer_income: "Nicht ausgezahlte Herausgeberanteile",
                claim_fees: "Gebühren beanspruchen",
                fund_text: "The Gebührenpool wird dazu genutzt Gebühren in %(core)s durch einen impliziten Wechsel von %(asset)s zu %(core)s zu finanzieren. Sollte der Gebührenpool trocken liegen, können Gebühren nicht länger in %(asset)s bezahlt werden sondern nur noch in %(core)s",
                claim_text: "Der Assetherausgeben kann die zusammengetragenen Anteile hier beanspruchen"
            },
            permissions: {
                title: "Befugnisse",
                max_market_fee: "Maximale Marktgebühr",
                max_supply: "Maximale Verfügbarkeit",
                blacklist_authorities: "Authoritäten der Schwarzliste",
                blacklist_markets: "Schwarzgelistete Märkte",
                whitelist_authorities: "Authoritäten der Weißliste",
                whitelist_markets: "Weißgelistete Märkte"
            },
            price_feed_data: {
                title: "Price Feed Daten",
                settlement_price: "Settlement Preis",
                core_exchange_rate: "CER",
                maintenance_collateral_ratio: "MCR",
                maximum_short_squeeze_ratio: "MSSR",
                publisher: "Publisher",
                published: "Published"
            }
        },
        witnesses: {
            title: "Witnesses",
            current: "Aktueller Witness",
            participation: "Beteiligungs Rate",
            pay: "Bezahlung pro Block",
            budget: "Übriges Budget",
            next_vote: "Aktualisierung der Stimmen",
            card: "Kartenansicht",
            table: "Tabellenansicht",
            rank: "Rang",
            last_confirmed: "Zuletzt bestätigt",
            missed: "verpasste Blöcke"

        },
        committee_members: {
            title: "Kommitteemitglied",
            active: "Gesamtzahl aktiver Kommitteemitglieder"
        },
        committee_member: {
            title: "Kommitteemitglied"
        },
        workers: {
            title: "Budgetpunkte"
        },
        proposals: {
            title: "Vorschlag"
        },
        account: {
            title: "Konto"
        },
        fees: {
            type: "Gebührentyp",
            fee: "Standartgebühr",
            feeeq: "(äquivalent)",
            feeltm: "Gebühr bei lebenslangem bzw. Jahresabo",
            feeltmeq: "(äquivalent)",
        }
    },
    settings: {
        inverseMarket: "Bevorzugte Marktorientierung",
        unit: "Bevorzugte Rechnungseinheit",
        confirmMarketOrder: "Nach Bestätigung für Marktanweisungen fragen",
        locale: "Sprache wechseln",
        confirm_yes: "Immer",
        confirm_no: "Nie",
        always_confirm: "Für jede Transaction nach Bestätigung fragen",
        wallets: "Geldbörsen",
        connection: "API Anbindung",
        add_ws: "Websocket API hinzufügen",
        remove_ws: "Websocket API entfernen",
        faucet_address: "Faucet Address",
        showSettles: "Settlements in der Depth-Chart anzeigen",
        yes: "Ja",
        no: "Nein",
        walletLockTimeout: "Geldbörse automatische sperren (Sekunden)"
    },
    footer: {
        title: "Graphene",
        block: "Spitzenblock",
        loading: "Lade..."
    },
    exchange: {
        market: "Markt",
        price_history: "Preisverlauf",
        order_depth: "Ordertiefe",
        history: "Marktverlauf",
        my_history: "Meine Historie",
        balance: "Guthaben",
        lowest_ask: "Günstigstes Ask",
        highest_bid: "Höchstes Bid",
        total: "Gesamt",
        value: "Wert",
        price: "Preis",
        latest: "Letzer Preis",
        call: "Call Preis",
        core_rate: "Gebührenrate",
        settle: "Settlement Preis",
        squeeze: "Margin Call Preis",
        maintenance: "Maintenance Call Preis",
        your_price: "Ihr Call Preis",
        volume: "Volumen",
        vol_short: "Vol",
        spread: "Spread",
        quantity: "Quantität",
        buy: "Kaufen",
        sell: "Verkaufen",
        receive: "Empfangen",
        vertical: "Vertical",
        horizontal: "Horizontal",
        confirm_buy: "Bestätigen Sie die Anweisung: Kauf von %(buy_amount)s %(buy_symbol)s zum Preis von %(price_amount)s %(price_symbol)s",
        confirm_sell: "Bestätigen Sie die Anweisung: Verkauf von %(sell_amount)s %(sell_symbol)s zum Preis von %(price_amount)s %(price_symbol)s",
        market_name: "Meine Märkte",
        quote_supply: "Quote Verfügbarkeit",
        base_supply: "Base Verfügbarkeit",
        more: "Alle Märkte",
        volume_24: "24h Volume",
        change: "Änderung",
        confirm: "Ihre Order ist %(diff)s% vom aktuellen Preis entfernt. Sind Sie sicher?",
        indicators: "Indikatoren",
        rsi: "Relative Strength Index",
        ema: "Exponential Moving Average",
        sma: "Simple Moving Average",
        atr: "Average True Range",
        period: "Periode (Tage)",
        overbought: "Overbought",
        oversold: "Oversold",
        index: "Index",
        my_bids: "Meine Bids",
        my_asks: "Meine Asks",
        settle_orders: "Settlement Order",
        asks: "Asks",
        bids: "Bids",
        no_data: "Keine Daten",
        time: "Zeitintervall",
        borrow: "Leihen",
        no_balance: "Ungenügendes Guthaben",
        invalid_amount: "Ungültiger Betrag",
        invalid_price: "Ungültiger Preis"
    },
    fees: {
     title: "Gebühren"
    },
    markets: {
        title: "Märkte",
        base: "Base Asset",
        market_search: "Markt Suche",
        filter: "Filter",
        core_rate: "Kernrate:",
        supply: "Verfügbarkeit",
        search: "Suche",
        preferred: "Bevorzugte Märkte"
    },
    wallet: {
        title: "Geldbörse",
        confirm: "Passwort bestätigen",
        password: "Passwort",
        existing_password: "Existierendes Passwort",
        change_password: "Passwort ändern",
        change_wallet: "Geldbörse wechseln",
        wallet_created: "Gerldbörse erstellt",
        create_wallet: "Gerldbörse erstellen",
        import_bts1: "Importieren aus BitShares 0.9.3c",
        setup_wallet: "Gelbörse einrichten",
        delete_confirm_line2: "Unerwartete schlechte Dinge werden passieren, sollten Sie das hier nicht lesen!",
        delete_confirm_line3: "Diese Aktion kan NICHT rückgängig gemacht werden!",
        delete_wallet_name: "Gelbörse (%(name)s) löschen",
        balance_claims: "Eingeforderte Guthaben",
        delete_wallet_name: "Wallet (%(name)s) löschen",
        balance_claims: "Balance einfordern",
        download: "Download",
        name: "Name der Geldbörse",
        create: "Erstellen",
        console: "Geldbörsen Management Konsole",
        create_backup: "Sicherung erstellen",
        backup_brainkey: "Brainkey sichern",
        create_backup_of: "Sichere Geldbörse (%(name)s)",
        import_backup: "Sicherung Importieren",
        restore_backup: "Sicherung wiederherstellen",
        import_keys: "Schlüssel importieren",
        import_keys_tool: "Schlüssel Import Werkzeug",
        brainkey: "Brainkey",
        new_wallet: "Neue Geldbörse",
        active_wallet: "Active Gelbörse",
        verified: "Verifiziert",
        verify_prior_backup: "Prüfe vorherige Sicherung",
        brainkey_not_verified: "Dieser Gedächtnisschlüssel ist nicht verifiziert",
        cancel: "Abbrechen",
        reset: "Zurücksetzen",
        done: "Erledigt",
        verify: "Prüfe",
        invalid_format: "Ungültiges Format",
        enter_password: "Passwordeingabe",
        downoad: "Download",
        new_wallet_name: "Names der neuen Geldbörse",
        wallet_exist: "Gelbdörse existiert bereits. Wählen Sie einen anderen Namen.",
        wallet_exist_with_name: "Geldbörse (%(name)s) existiert bereits. Wählen Sie einen anderen Namen",
        accept: "Zustimmen",
        ready_to_restore: "Fertig für Wiederherstellung",
        restore_wallet_of: "Stelle Gelfbörse (%(name)s) wieder her",
        restore_success: "Geldbörse (%(name)s) erfolgreich wieder hergestellt",
        change: "Wechsele Geldbörse (%(name)s)",
        import_20_notice1: "Importiere dein BTS 2.0+ BACKUP zuerst",
        import_20_notice2: "(falls vorhanden)",
        loading_balances: "Bestehende Kontostände werden geladen",
        no_balance: "keine Kontostände bekannt",
        claim_balance: "Kontostand einfordern",
        claim_balances: "Kontostände einfordern",
        unclaimed: "nicht eingefordert",
        unclaimed_vesting: "nicht eingefordert (vesting)",
        no_accounts: "Keine Konten",
        brainkey_no_match: "Brainkey stimmt (noch) nicht überein.",
        reenter_brainkey: "Brainkey bestätigen",
        pwd4brainkey: "Passwort eingeben um Brainkey anzuzeigen",
        show_brainkey: "Brainkey anzeigen",
        brainkey_w1: "WARNUNG: Bitte ausdrucken oder aufschreiben",
        brainkey_w2: "Jeder mit Zugang zu diesem Schlüssel wird",
        brainkey_w3: "Zugang zu ihren Finanzen in dieser Geldbörse erhalten",
        custom_brainkey: "Individueller Brainkey (Fortgeschritten)",
        last_backup: "letzte Sicherung",
        never_backed_up: "Diese Geldbörse wurde noch nie gesichert!",
        need_backup: "Diese Gelbörse sollte neu gesichert werden!",
        noneed_backup: "Keine Sicherung nötig!",
        noneed_backup: "Kein Sicherung erforderlich"
    },
    borrow: {
        title: "Kollateral Position für %(asset_symbol)s",
        no_valid: "Kein Gültiger Feed Preis für %(asset_symbol)s",
        coll_ratio: "Kollateral Ratio",
        call_limit: "Markt Call Limit",
        adjust: "Position anpassen",
        close: "Position schlißen",
        update: "Aktualisieren",
        errors: {
            below: "Kollateral Ratio unter Aufrechterhaltungslevel",
            collateral: "Unzureichendes Kollateral"
        }
    },
    modal : {
      issue : {
        to: "Gerausgeben an",
        amount: "Menge",
        submit: "Herausgeben"
      },
      withdraw : {
        amount: "Abzuhebender Betrag",
        address: "Abheben zu Adresse",
        submit: "Abheben"
      },
      deposit : {
        amount: "Einzahlungsbetrag",
        submit: "Einzahlen"
      },
      settle: {
        title: "Settlement für %(asset)s durchführen",
        amount: "Menge für das Settlement",
        submit: "Settlement durchführen"
      },
      ok: "OK"
    },
    init_error: {
        title: "Initialisierungsfehler",
        ws_status: "Websocket Verbindungsstatus",
        retry: "nocheinmal versuchen",
        connected: "verbunden",
        not_connected: "Nicht verbunden",
        browser: "Nicht unterstützter Browser",
        browser_text: "Ihr Browser ist unzureichend mit dem BitShares Wallet getestet worden. Wir empfehlen Ihnen eine Sicherung ihrer Geldbörse durchzuführen und diese in dem Chrome Browser zu importieren. Nutzen Sie Ihren Browser auf eigene Gefahr!",
        understand: "Verstanden!"
    },
    refcode: {
        claim: "Beantspruchen",
        claim_refcode: "Referral Code einlösen",
        refcode_optional: "Referral Code (optional)",
        enter_refcode: "Geben Sie den Referral Code ein"
    },
    gateway: {
        bridge: "Bridge",
        gateway: "Gateway",
        symbol: "Symbol",
        deposit_to: "Einzahlen auf",
        balance: "Guthaben",
        generate: "Generieren",
        deposit: "Einzahlung",
        withdraw: "Abhebung",
        inventory: "Inventar",
        scan_qr: "Scan QR",
        transwiser: {
            gateway: "Transwiser",
            visit_weidian: "Klicken für Einzahlung",
            deposit_title: "Deposit RMB to %(asset)s",
            withdraw_title: "Withdraw %(asset)s to RMB",
            alipay: "ALIPAY Account Name",
            withdraw_note: "Currently only ALIPAY withdraw is supported.  Your asset will be converted at 1:1 ratio and send RMB to your ALIPAY account.",
            you_will_receive: "You will receive %(amount)s RMB"
        },
        meta: {
            open_website: "Webseite öffnen"
        }
    }
};
