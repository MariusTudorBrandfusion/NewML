lang_selected = 'eng'; // DEFAULT LANGUAGE
window.onload = function () { changeLang(lang_selected); }
// SET LANGUAGES
function changeLang(lang){
	reset_form(); // CALL RESET FORM FUNCTION
	switch (lang) {
		case 'eng': // ENGLISH
			document.getElementById( 'ds-l-eng' ).style.opacity = '1';
			document.getElementById( 'ds-l-ger' ).style.opacity = '.5';
			document.getElementById( 'ds-l-pol' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rus' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rom' ).style.opacity = '.5';
			document.getElementById( 'cell_your_selection' ).innerHTML = 'Your Selection';
			document.getElementById( 'bet_on_home_l' ).innerHTML = '<span></span>Home Team';
			document.getElementById( 'bet_on_away_l' ).innerHTML = '<span></span>Away Team';
			document.getElementById( 'bet_on_over_l' ).innerHTML = '<span></span>Over';
			document.getElementById( 'bet_on_under_l' ).innerHTML = '<span></span>Under';
			document.getElementById( 'cell_odds_format' ).innerHTML = 'Odds Format';
			document.getElementById( 'de_op' ).innerHTML = 'Decimal Odds';
			document.getElementById( 'fr_op' ).innerHTML = 'Fractional Odds';
			document.getElementById( 'am_op' ).innerHTML = 'American Odds';
			document.getElementById( 'ho_op' ).innerHTML = 'Hong Kong Odds';
			document.getElementById( 'in_op' ).innerHTML = 'Indo Odds';
			document.getElementById( 'ma_op' ).innerHTML = 'Malay Odds';
			document.getElementById( 'cell_odds' ).innerHTML = 'Home Team Odds';
			document.getElementById( 'cell_handicap' ).innerHTML = 'Home Team Asian Handicap';
			document.getElementById( 'stake_cell' ).innerHTML = 'Stake';
			document.getElementById( 'calculation_cell' ).innerHTML = 'Calculation Options';
			document.getElementById( 'final_score_check_l' ).innerHTML = '<span></span>Specific Final Score';
			document.getElementById( 'final_all_check_l' ).innerHTML = '<span></span>All Scenarios';
			document.getElementById( 'specific_cell' ).innerHTML = 'Specific Final Score';
			document.getElementById( 'score-home' ).innerHTML = 'Home Team';
			document.getElementById( 'score-away' ).innerHTML = 'Away Team';
			document.getElementById( 'btn_calculate' ).innerHTML = 'Calculate';
			document.getElementById( 'btn_reset' ).innerHTML = 'Reset Form';
			home_or_away = "Home team";
			lang_selected = 'eng';
			document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			lang_win = 'Win';
			lang_push = 'Push';
			lang_lose = 'Lose';
			lang_half_win = 'Half Win';
			lang_half_lose = 'Half Lose';
		break;
		case 'ger': // GERMAN
			document.getElementById( 'ds-l-ger' ).style.opacity = '1';
			document.getElementById( 'ds-l-eng' ).style.opacity = '.5';
			document.getElementById( 'ds-l-pol' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rus' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rom' ).style.opacity = '.5';
			document.getElementById( 'cell_your_selection' ).innerHTML = 'Ihre Auswahl';
			document.getElementById( 'bet_on_home_l' ).innerHTML = '<span></span>Heimmannschaft';
			document.getElementById( 'bet_on_away_l' ).innerHTML = '<span></span>Auswärtsmannschaft';
			document.getElementById( 'bet_on_over_l' ).innerHTML = '<span></span>Über';
			document.getElementById( 'bet_on_under_l' ).innerHTML = '<span></span>Unter';
			document.getElementById( 'cell_odds_format' ).innerHTML = 'Quotenformat';
			document.getElementById( 'de_op' ).innerHTML = 'Dezimalformat';
			document.getElementById( 'fr_op' ).innerHTML = 'Bruchformat';
			document.getElementById( 'am_op' ).innerHTML = 'Amerikanisches Format';
			document.getElementById( 'ho_op' ).innerHTML = 'Hong Kong Format';
			document.getElementById( 'in_op' ).innerHTML = 'Indo Format';
			document.getElementById( 'ma_op' ).innerHTML = 'Malaiisches Format';
			document.getElementById( 'cell_odds' ).innerHTML = 'Quote Heimmannschaft';
			document.getElementById( 'cell_handicap' ).innerHTML = 'Asian Handicap Heimmannschaft';
			document.getElementById( 'stake_cell' ).innerHTML = 'Einsatz';
			document.getElementById( 'calculation_cell' ).innerHTML = 'Berechnungsoptionen';
			document.getElementById( 'final_score_check_l' ).innerHTML = '<span></span>bestimmtes Endergebnis';
			document.getElementById( 'final_all_check_l' ).innerHTML = '<span></span>sämtliche Szenarien';
			document.getElementById( 'specific_cell' ).innerHTML = 'bestimmtes Endergebnis';
			document.getElementById( 'score-home' ).innerHTML = 'Heimmannschaft';
			document.getElementById( 'score-away' ).innerHTML = 'Auswärtsmannschaft';
			document.getElementById( 'btn_calculate' ).innerHTML = 'berechnen';
			document.getElementById( 'btn_reset' ).innerHTML = 'neue Eingabe';
			home_or_away = "Heimmannschaft";
			lang_selected = 'ger';
			document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			lang_win = 'Gewinn';
			lang_push = 'Remis';
			lang_lose = 'Verlust';
			lang_half_win = 'halber Gewinn';
			lang_half_lose = 'halber Verlust';

		break;
		case 'pol': // POLISH
			document.getElementById( 'ds-l-pol' ).style.opacity = '1';
			document.getElementById( 'ds-l-eng' ).style.opacity = '.5';
			document.getElementById( 'ds-l-ger' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rus' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rom' ).style.opacity = '.5';
			document.getElementById( 'cell_your_selection' ).innerHTML = 'Twój Wybór';
			document.getElementById( 'bet_on_home_l' ).innerHTML = '<span></span>Gospodarze';
			document.getElementById( 'bet_on_away_l' ).innerHTML = '<span></span>Goście';
			document.getElementById( 'bet_on_over_l' ).innerHTML = '<span></span>Powyżej';
			document.getElementById( 'bet_on_under_l' ).innerHTML = '<span></span>Poniżej';
			document.getElementById( 'cell_odds_format' ).innerHTML = 'Format kursu';
			document.getElementById( 'de_op' ).innerHTML = 'Dziesiętny';
			document.getElementById( 'fr_op' ).innerHTML = 'Ułamkowy';
			document.getElementById( 'am_op' ).innerHTML = 'Amerykański';
			document.getElementById( 'ho_op' ).innerHTML = 'Hongkoński';
			document.getElementById( 'in_op' ).innerHTML = 'Indo';
			document.getElementById( 'ma_op' ).innerHTML = 'Malajski';
			document.getElementById( 'cell_odds' ).innerHTML = 'Kurs na wygraną Gospodarzy';
			document.getElementById( 'cell_handicap' ).innerHTML = 'Handicap - Drużyna Gospodarzy';
			document.getElementById( 'stake_cell' ).innerHTML = 'Stawka';
			document.getElementById( 'calculation_cell' ).innerHTML = 'Opcje Kalkulatora';
			document.getElementById( 'final_score_check_l' ).innerHTML = '<span></span>Dokładny wynik końcowy';
			document.getElementById( 'final_all_check_l' ).innerHTML = '<span></span>Wszystkie możliwości';
			document.getElementById( 'specific_cell' ).innerHTML = 'Dokładny wynik końcowy';
			document.getElementById( 'score-home' ).innerHTML = 'Gospodarze';
			document.getElementById( 'score-away' ).innerHTML = 'Goście';
			document.getElementById( 'btn_calculate' ).innerHTML = 'Oblicz';
			document.getElementById( 'btn_reset' ).innerHTML = 'Zresetuj formularz';
			home_or_away = "gospodarzy";
			lang_selected = 'pol';
			document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			lang_win = 'Wygrana';
			lang_push = 'Remis';
			lang_lose = 'Przegrana';
			lang_half_win = 'Połowa wygrana';
			lang_half_lose = 'Połowa przegrana';
		break;
		case 'rus': // RUSSIAN
			document.getElementById( 'ds-l-rus' ).style.opacity = '1';
			document.getElementById( 'ds-l-eng' ).style.opacity = '.5';
			document.getElementById( 'ds-l-ger' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rom' ).style.opacity = '.5';
			document.getElementById( 'ds-l-pol' ).style.opacity = '.5';
			document.getElementById( 'cell_your_selection' ).innerHTML = 'Ваш выбор';
			document.getElementById( 'bet_on_home_l' ).innerHTML = '<span></span>Хозяева поля';
			document.getElementById( 'bet_on_away_l' ).innerHTML = '<span></span>Гости';
			document.getElementById( 'bet_on_over_l' ).innerHTML = '<span></span>Больше';
			document.getElementById( 'bet_on_under_l' ).innerHTML = '<span></span>Меньше';
			document.getElementById( 'cell_odds_format' ).innerHTML = 'Формат коэффициентов';
			document.getElementById( 'de_op' ).innerHTML = 'Десятичные коэффициенты';
			document.getElementById( 'fr_op' ).innerHTML = 'Дробные коэффициенты';
			document.getElementById( 'am_op' ).innerHTML = 'Американские коэффициенты';
			document.getElementById( 'ho_op' ).innerHTML = 'Гонконгские коэффициенты';
			document.getElementById( 'in_op' ).innerHTML = 'Индонезийские коэффициенты';
			document.getElementById( 'ma_op' ).innerHTML = 'Малазийские коэффициенты';
			document.getElementById( 'cell_odds' ).innerHTML = 'Коэффициенты на победу хозяев';
			document.getElementById( 'cell_handicap' ).innerHTML = 'Азиатский гандикап - победа хозяев';
			document.getElementById( 'stake_cell' ).innerHTML = 'Ставка';
			document.getElementById( 'calculation_cell' ).innerHTML = 'Параметры вычислений';
			document.getElementById( 'final_score_check_l' ).innerHTML = '<span></span>Определенный финальный счет';
			document.getElementById( 'final_all_check_l' ).innerHTML = '<span></span>Все прогнозы';
			document.getElementById( 'specific_cell' ).innerHTML = 'Определенный финальный счет';
			document.getElementById( 'score-home' ).innerHTML = 'Хозяева поля';
			document.getElementById( 'score-away' ).innerHTML = 'Гости';
			document.getElementById( 'btn_calculate' ).innerHTML = 'Вычислить';
			document.getElementById( 'btn_reset' ).innerHTML = 'Сбросить информацию';
			home_or_away = "Хозяева поля";
			lang_selected = 'rus';
			document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			lang_win = 'Победа';
			lang_push = 'Ничья';
			lang_lose = 'Проигрыш';
			lang_half_win = 'Половина выигрыша';
			lang_half_lose = 'Половина проигрыша';
		break;
		case 'rom': // ENGLISH
			document.getElementById( 'ds-l-rom' ).style.opacity = '1';
			document.getElementById( 'ds-l-ger' ).style.opacity = '.5';
			document.getElementById( 'ds-l-pol' ).style.opacity = '.5';
			document.getElementById( 'ds-l-rus' ).style.opacity = '.5';
			document.getElementById( 'ds-l-eng' ).style.opacity = '.5';
			document.getElementById( 'cell_your_selection' ).innerHTML = 'Selecția ta';
			document.getElementById( 'bet_on_home_l' ).innerHTML = '<span></span>Echipa gazdă';
			document.getElementById( 'bet_on_away_l' ).innerHTML = '<span></span>Echipa oaspete';
			document.getElementById( 'bet_on_over_l' ).innerHTML = '<span></span>Deasupra';
			document.getElementById( 'bet_on_under_l' ).innerHTML = '<span></span>Dedesubt';
			document.getElementById( 'cell_odds_format' ).innerHTML = 'Formatul cotelor';
			document.getElementById( 'de_op' ).innerHTML = 'Cote decimale';
			document.getElementById( 'fr_op' ).innerHTML = 'Cote fracţionare';
			document.getElementById( 'am_op' ).innerHTML = 'Cote americane';
			document.getElementById( 'ho_op' ).innerHTML = 'Cote Hong Kong';
			document.getElementById( 'in_op' ).innerHTML = 'Cote Indo';
			document.getElementById( 'ma_op' ).innerHTML = 'Cote malaieziene';
			document.getElementById( 'cell_odds' ).innerHTML = 'Cote pentru Echipa Gazdă';
			document.getElementById( 'cell_handicap' ).innerHTML = 'Handicapul Asiatic pentru Echipa Gazdă';
			document.getElementById( 'stake_cell' ).innerHTML = 'Miză';
			document.getElementById( 'calculation_cell' ).innerHTML = 'Opţiuni de calcul';
			document.getElementById( 'final_score_check_l' ).innerHTML = '<span></span>Scor Final Specific';
			document.getElementById( 'final_all_check_l' ).innerHTML = '<span></span>Toate scenariile';
			document.getElementById( 'specific_cell' ).innerHTML = 'Scor Final Specific';
			document.getElementById( 'score-home' ).innerHTML = 'Echipa gazdă';
			document.getElementById( 'score-away' ).innerHTML = 'Echipa oaspete';
			document.getElementById( 'btn_calculate' ).innerHTML = 'Calculează';
			document.getElementById( 'btn_reset' ).innerHTML = 'Formular nou';
			home_or_away = "Echipa gazdă";
			lang_selected = 'rom';
			document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			lang_win = 'Câştig';
			lang_push = 'Extragere';
			lang_lose = 'Pierdere';
			lang_half_win = 'Câştig în jumătate';
			lang_half_lose = 'Pierdere în jumătate';
		break;
	}
}
// START CALCULATOR
// START MAKE THE BET ON SELECTION
selected_bet_on = 'home'; // DEFAULT SELECTED BET ON IS HOME
final_score_type = 'score'; // DEFAULT SCORE TYPE
function changeLabel(id){ // RADIO BUTTON SELECTION ACTIONS
	select_output_home = '<select id="select_handicap"><option value="-4.00">-4.00</option><option value="-3.75">-3.75 (-3.5, -4.0)</option><option value="-3.50">-3.50</option><option value="-3.25">-3.25 (-3.0, -3.5)</option><option value="-3.00">-3.00</option><option value="-2.75">-2.75 (-2.5, -3.0)</option><option value="-2.50">-2.50</option><option value="-2.25">-2.25 (-2.0, -2.5)</option><option value="-2.00">-2.00</option><option value="-1.75">-1.75 (-1.5, -2.0)</option><option value="-1.50">-1.50</option><option value="-1.25">-1.25 (-1.0, -1.5)</option><option value="-1.00">-1.00</option><option value="-0.75">-0.75 (-0.5, -1.0)</option><option value="-0.50">-0.50</option><option value="-0.25">-0.25 (0.0, -0.5)</option><option value="0.00" selected="selected">0.0 (Level)</option><option value="0.25">+0.25 (+0.0, +0.5)</option><option value="0.50">+0.50</option><option value="0.75">+0.75 (+0.5, +1.0)</option><option value="1.00">+1.00</option><option value="1.25">+1.25 (+1.0, +1.5)</option><option value="1.50">+1.50</option><option value="1.75">+1.75 (+1.5, +2.0)</option><option value="2.00">+2.00</option><option value="2.25">+2.25 (+2.0, +2.5)</option><option value="2.50">+2.50</option><option value="2.75">+2.75 (+2.5, +3.0)</option><option value="3.00">+3.00</option><option value="3.25">+3.25 (+3.0, +3.5)</option><option value="3.50">+3.50</option><option value="3.75">+3.75 (+3.5, +4.0)</option><option value="4.00">+4.00</option></select>';
	select_output_over = '<select id="select_over_value"><option value="0.50" selected="selected">0.50</option><option value="0.75">0.75</option><option value="1.00">1.00</option><option value="1.25">1.25</option><option value="1.50">1.50</option><option value="1.75">1.75</option><option value="2.00">2.00</option><option value="2.25">2.25</option><option value="2.50">2.50</option><option value="2.75">2.75</option><option value="3.00">3.00</option><option value="3.25">3.25</option><option value="3.50">3.50</option><option value="3.75">3.75</option><option value="4.00">4.00</option><option value="4.25">4.25</option><option value="4.50">4.50</option><option value="4.75">4.75</option><option value="5.00">5.00</option><option value="5.25">5.25</option><option value="5.50">5.50</option><option value="5.75">5.75</option><option value="6.00">6.00</option></select>';
	switch (id) {
		case 'bet_on_selection_home':
			// CHANGE ODDS TEXT
			if ( lang_selected == 'eng' ) { text_odds = 'Home Team Odds'; }
			if ( lang_selected == 'ger' ) { text_odds = 'Quote Heimmannschaft'; }
			if ( lang_selected == 'pol' ) { text_odds = 'Kurs na wygraną Gospodarzy'; }
			if ( lang_selected == 'rus' ) { text_odds = 'Коэффициенты на победу хозяев'; }
			if ( lang_selected == 'rom' ) { text_odds = 'Cote pentru Echipa Gazdă'; }
			// CHANGE HANDICAP TEXT
			if ( lang_selected == 'eng' ) { text_handicap = 'Home Team Asian Handicap'; }
			if ( lang_selected == 'ger' ) { text_handicap = 'Asian Handicap Heimmannschaft'; }
			if ( lang_selected == 'pol' ) { text_handicap = 'Handicap - Drużyna Gospodarzy'; }
			if ( lang_selected == 'rus' ) { text_handicap = 'Азиатский гандикап - победа хозяев'; }
			if ( lang_selected == 'rom' ) { text_handicap = 'Handicapul Asiatic pentru Echipa Gazdă'; }
			// TEXT TEAM
			if ( lang_selected == 'eng' ) { home_or_away = "Home team"; }
			if ( lang_selected == 'ger' ) { home_or_away = "Heimmannschaft"; }
			if ( lang_selected == 'pol' ) { home_or_away = 'gospodarzy'; }
			if ( lang_selected == 'rus' ) { home_or_away = 'Хозяева поля'; }
			if ( lang_selected == 'rom' ) { home_or_away = "Echipa gazdă"; }
			selected_bet_on = "home";
			document.getElementById( 'selection_cell' ).innerHTML = select_output_home; // MAKE THE OUTPUT
			document.getElementById( 'cell_odds' ).innerHTML = text_odds; // CHANGE ODDS TEXT
			document.getElementById( 'cell_handicap' ).innerHTML = text_handicap; // CHANGE HANDICAP TEXT
		break;
		case 'bet_on_selection_away':
			// CHANGE ODDS TEXT
			if ( lang_selected == 'eng' ) { text_odds = 'Away Team Odds'; }
			if ( lang_selected == 'ger' ) { text_odds = 'Quote Auswärtsmannschaft'; }
			if ( lang_selected == 'pol' ) { text_odds = 'Kurs na wygraną Gości'; }
			if ( lang_selected == 'rus' ) { text_odds = 'Коэффициенты на победу гостей'; }
			if ( lang_selected == 'rom' ) { text_odds = 'Cote pentru Echipa Oaspete'; }
			// CHANGE HANDICAP TEXT
			if ( lang_selected == 'eng' ) { text_handicap = 'Away Team Asian Handicap'; }
			if ( lang_selected == 'ger' ) { text_handicap = 'Asian Handicap Auswärtsmannschaft'; }
			if ( lang_selected == 'pol' ) { text_handicap = 'Handicap - Drużyna Gości'; }
			if ( lang_selected == 'rus' ) { text_handicap = 'Азиатский гандикап - победа гостей'; }
			if ( lang_selected == 'rom' ) { text_handicap = 'Handicapul Asiatic pentru Echipa Oaspete'; }
			// TEXT TEAM
			if ( lang_selected == 'eng' ) { home_or_away = 'Away team'; }
			if ( lang_selected == 'ger' ) { home_or_away = 'Auswärtsmannschaft'; }
			if ( lang_selected == 'pol' ) { home_or_away = 'gości'; }
			if ( lang_selected == 'rus' ) { home_or_away = 'Гости'; }
			if ( lang_selected == 'rom' ) { home_or_away = 'Echipa oaspete'; }
			selected_bet_on = 'away';
			document.getElementById( 'selection_cell' ).innerHTML = select_output_home; // MAKE THE OUTPUT
			document.getElementById( 'cell_odds' ).innerHTML = text_odds; // CHANGE ODDS TEXT
			document.getElementById( 'cell_handicap' ).innerHTML = text_handicap; // CHANGE HANDICAP TEXT
		break;
		case 'bet_on_selection_over':
			// CHANGE ODDS TEXT
			if ( lang_selected == 'eng' ) { text_odds = 'Over Odds'; }
			if ( lang_selected == 'ger' ) { text_odds = 'Über Quoten'; }
			if ( lang_selected == 'pol' ) { text_odds = 'Kurs na Powyżej'; }
			if ( lang_selected == 'rus' ) { text_odds = 'Коэффициенты на повышение'; }
			if ( lang_selected == 'rom' ) { text_odds = 'Cote pentru Pariurile Over'; }
			// CHANGE HANDICAP TEXT
			if ( lang_selected == 'eng' ) { text_handicap = 'Over'; }
			if ( lang_selected == 'ger' ) { text_handicap = 'Über'; }
			if ( lang_selected == 'pol' ) { text_handicap = 'Powyżej'; }
			if ( lang_selected == 'rus' ) { text_handicap = 'Больше'; }
			if ( lang_selected == 'rom' ) { text_handicap = 'Deasupra (Over)'; }
			selected_bet_on = 'over';
			document.getElementById( 'selection_cell' ).innerHTML = select_output_over; // MAKE THE OUTPUT
			document.getElementById( 'cell_odds' ).innerHTML = text_odds; // CHANGE ODDS TEXT
			document.getElementById( 'cell_handicap' ).innerHTML = text_handicap; // CHANGE HANDICAP TEXT
		break;
		case 'bet_on_selection_under':
			// CHANGE ODDS TEXT
			if ( lang_selected == 'eng' ) { text_odds = 'Under Odds'; }
			if ( lang_selected == 'ger' ) { text_odds = 'Unter Quoten'; }
			if ( lang_selected == 'pol' ) { text_odds = 'Kurs na Poniżej'; }
			if ( lang_selected == 'rus' ) { text_odds = 'Коэффициенты на понижение'; }
			if ( lang_selected == 'rom' ) { text_odds = 'Cote pentru Pariurile Under'; }
			// CHANGE HANDICAP TEXT
			if ( lang_selected == 'eng' ) { text_handicap = 'Under'; }
			if ( lang_selected == 'ger' ) { text_handicap = 'Unter'; }
			if ( lang_selected == 'pol' ) { text_handicap = 'Poniżej'; }
			if ( lang_selected == 'rus' ) { text_handicap = 'Меньше'; }
			if ( lang_selected == 'rom' ) { text_handicap = 'Dedesubt (Under)'; }
			selected_bet_on = 'under';
			document.getElementById( 'selection_cell' ).innerHTML = select_output_over; // MAKE THE OUTPUT
			document.getElementById( 'cell_odds' ).innerHTML = text_odds; // CHANGE ODDS TEXT
			document.getElementById( 'cell_handicap' ).innerHTML = text_handicap; // CHANGE HANDICAP TEXT
		break;
		case 'score':
			document.getElementById( 'final_score_row' ).style.display = ''; // SHOW LAST ROW
			final_score_type = 'score';
		break;
		case 'all':
			document.getElementById( 'final_score_row' ).style.display = 'none'; // HIDE LAST ROW
			final_score_type = 'all';
		break;
	}
}
// END MAKE THE BET ON SELECTION
// START FORMAT CONVERSION
var previous = 'de'; // DEFAULT PREVIOUS FORMAT IS DECIMAL
function showResult(selectObj){
	var idx = selectObj.selectedIndex; // GET INDEX OF SELECTED OPTION
	var which = selectObj.options[idx].value; // GET VALUE OF SELECTED OPTION
	// FROM DECIMAL
	if ( previous == 'de' ) {
		var de_val = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE & REPLACE " , "
		if ( de_val ) {
			if ( de_val > 1 ) { // VALIDATE THE INPUT
				// TO FRACTIONAL
				if ( which == 'fr' ) {
					var after = de_val.substr( de_val.lastIndexOf( '.' ) ); // GET DOT AND VALUE AFTER DOT
					var lafter = after.length-1; // GET LENGTH OF DOT AND VALUE - 1
					var divider = 1,i; // SET THE DIVIDER
					for ( i = 1; i <= lafter; i++ ) {
						divider *= 10; // MULTIPLY BY 10 FOR EVERY AFTER CHARACTER
					}
					de_val = de_val - 1; // SUBTRACT 1
					var up = Math.round( de_val * divider );
					for ( i = 2; up > divider ? i < up : i < divider; i++ ) {
				 		if ( up%i == 0 && divider%i == 0 ) {
				   			divider/=i;
				   			up/=i;
				   			i=1;
				  		}
					}
					document.getElementById( 'odd_input' ).value = up + '/' + divider; // SHOW RESULT
				}
				// TO AMERICAN
				if ( which == 'am' ) {
					function de_am() {
						if ( de_val < 2 ) {
							am_val = 100 / ( 1 - de_val );
						}
						else {
							am_val = 100 * ( de_val - 1 );
						}
						am_val = Math.round( am_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
						document.getElementById( 'odd_input' ).value = am_val; // SHOW RESULT
					}
					de_am();
				}
				// TO HONG KONG
				if ( which == 'ho' ) {
					function de_ho() {
						ho_val = de_val - 1;
						ho_val = Math.round( ho_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
						document.getElementById( 'odd_input' ).value = ho_val; // SHOW RESUL
					}
					de_ho();
				}
				// TO INDO
				if ( which == 'in' ) {
					function de_in() { // FUNCTION TO CONVERT DECIMAL IN INDO
						if ( de_val < 2 ) {
							in_val = 1 / ( 1 - de_val );
						}
						else {
							in_val = de_val - 1;
						}
						in_val = Math.round( in_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
						document.getElementById( 'odd_input' ).value = in_val; // SHOW RESULT
					}
					de_in(); // CALL FUNCTION
				}
				// TO MALAY
				if ( which == 'ma' ) {
					function de_ma() {
						if ( de_val <= 2 ) {
							ma_val = de_val - 1;
						}
						else {
							ma_val = 1 / ( 1 - de_val );
						}
						ma_val = Math.round( ma_val * 1000 ) / 1000; // FIX DECIMAL TO 2 DIGITS
						document.getElementById( 'odd_input' ).value = ma_val; // SHOW RESULT
					}
					de_ma();
				}
				previous = which; // SET PREVIOUS FORMAT
				document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			}
			else {
				if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong Decimal Odd'; }
				if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültige Dezimalquote'; }
				if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy kurs dziesiętny'; }
				if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный десятичный коэффициент'; }
				if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Cote decimale incorecte'; }
				previous == 'de';
				document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[0].selected = 'selected';
				document.getElementById( 'odd_input' ).value = '1.91';
			}

		}
		else {
			previous = which; // SET PREVIOUS FORMAT
		}
	}
	// FROM FRACTIONAL
	if ( previous == 'fr' ) {
		var fr_val = document.getElementById( 'odd_input' ).value; // GET VALUE
		if ( fr_val ) {
			var FLOAT_REGEXP = /^[0-9]+[\/:]{1}[0-9]+$/; // VALIDATION
			if ( FLOAT_REGEXP.test( fr_val ) ) {
				var de_val = eval( fr_val ) + 1; // CONVERT
				de_val = Math.round( de_val * 100 ) / 100; // 2 DIGITS
				// TO DECIMAL
				if ( which == 'de' ) {
					document.getElementById( 'odd_input' ).value = de_val; // SHOW RESULT
				}
				if ( which == 'am' ) { de_am(); } // TO AMERICAN
				if ( which == 'ho' ) { de_ho(); } // TO HONG KONG
				if ( which == 'in' ) { de_in(); } // TO INDO
				if ( which == 'ma' ) { de_ma(); } // TO MALAY
				previous = which; // SET PREVIOUS FORMAT
				document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			}
			else {
				if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong Fractional Odd'; }
				if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültige Bruchquote'; }
				if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy kurs ułamkowy'; }
				if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный дробный коэффициент'; }
				if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Cote fracţionare incorecte'; }
				previous == 'fr';
				document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[1].selected = 'selected';
				document.getElementById( 'odd_input' ).value = '91/100';
			}
		}
		else {
			previous = which; // SET PREVIOUS FORMAT
		}
	}
	// FROM AMERICAN
	if ( previous == 'am' ) {
		var am_val = document.getElementById( 'odd_input' ).value.replace( ",", "." ); // GET VALUE
		if ( am_val ) {
			if ( !isNaN( am_val ) && !( am_val >= -100 && am_val < 100  ) ) {
				// TO DECIMAL
				if ( which == 'de' ) {
					if ( am_val < -100 ) {
						de_val = 1 - 100 / am_val;
					}
					if ( am_val > 99 ) {
						de_val = 1 + am_val / 100;
					}
					de_val = Math.round( de_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
					document.getElementById( 'odd_input' ).value = de_val; // SHOW RESULT
				}
				// TO FRACTIONAL
				if ( which == 'fr' ) {
					if ( am_val < 0 ) {
						var sus = 100;
						var jos = am_val;
						var down = jos.substr( jos.lastIndexOf( '.' ) ); // GET DOT AND VALUE AFTER DOT
						var ldown = down.length - 1; // GET LENGTH OF DOT AND VALUE - 1
						var divider = 1,i; // SET DIVIDER
						for( i = 1; i <= ldown; i++ ) { // INCREASE DIVIDER WITH EACH VALUE AFTER DOT
							divider*=10;
						}
						var sus = Math.floor( sus * divider );
						var jos = Math.floor( jos * divider );
						var jos = Math.abs( jos );
						for( i = 2; sus > jos ? i < sus : i < jos; i++ ) { // SEE IF WE CAN SIMPLIFY
							if( sus%i == 0 && jos%i == 0 ) { // IF NUMBER HAS NO REMAINDER
						 		jos/=i; // DIVIDE TO i
								sus/=i; // NUMBER DIVIDE TO i
							   	i=1; // i = 1
							}
						}
					}
					else {
						var sus = am_val;
						var jos = 100;
						var down = sus.substr( sus.lastIndexOf( '.' ) ); // GET DOT AND VALUE AFTER DOT
						var ldown = down.length - 1; // GET LENGTH OF DOT AND VALUE - 1
						var divider = 1,i; // SET DIVIDER
						for( i = 1; i <= ldown; i++ ) { // INCREASE DIVIDER WITH EACH VALUE AFTER DOT
							divider *= 10;
						}
						var sus = Math.floor( sus * divider );
						var jos = Math.floor( jos * divider );
						var sus = Math.abs( sus );
						for( i = 2; sus > jos ? i < sus : i < jos; i++ ) { // SEE IF WE CAN SIMPLIFY
							if( sus%i == 0 && jos%i == 0 ) { // IF NUMBER HAS NO REMAINDER
						 		jos/=i; // DIVIDE TO i
								sus/=i; // NUMBER DIVIDE TO i
							   	i=1; // i = 1
							}
						}
					}
					if ( sus == jos ) { sus = jos = 1; }
					document.getElementById( 'odd_input' ).value = sus + '/' + jos;
				}
				// TO HONG KONG
				if ( which == 'ho' ) {
					if ( am_val < -100 ) {
						de_val = 1 - 100 / am_val;
					}
					if ( am_val > 99 ) {
						de_val = 1 + am_val / 100;
					}
					de_val = Math.round( de_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
					ho_val = de_val - 1;
					ho_val = Math.round( ho_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
					document.getElementById( 'odd_input' ).value = ho_val; // SHOW RESULT
				}
				// TO INDO
				if ( which == 'in' ) {
					if ( am_val < -100 ) {
						de_val = 1 - 100 / am_val;
					}
					if ( am_val > 99 ) {
						de_val = 1 + am_val / 100;
					}
					de_val = Math.round( de_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
					de_in();
				}
				// TO MALAY
				if ( which == 'ma' ) {
					if ( am_val < -100 ) {
						de_val = 1 - 100 / am_val;
					}
					if ( am_val > 99 ) {
						de_val = 1 + am_val / 100;
					}
					de_val = Math.round( de_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
					de_ma();
				}
				previous = which; // SET PREVIOUS FORMAT
				document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			}
			else {
				if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong American Odd'; }
				if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültige Amerikan. Quote'; }
				if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy kurs amerykański'; }
				if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный американский коэффициент'; }
				if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Cote americane incorecte'; }
				previous == 'am';
				document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[2].selected = 'selected';
				document.getElementById( 'odd_input' ).value = '-109.89';
			}
		}
		else {
			previous = which; // SET PREVIOUS FORMAT
		}
	}
	// FROM HONG KONG
	if ( previous == 'ho' ) {
		var ho_val = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE
		if ( ho_val ) {
			if ( ho_val > 0 ) {
				de_val = parseFloat( ho_val ) + 1;
				// TO DECIMAL
				if ( which == 'de' ) {
					de_val = Math.round( de_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
					document.getElementById( 'odd_input' ).value = de_val; // SHOW RESULT
				}
				// TO FRACTIONAL
				if ( which == 'fr' ) {
					var after = ho_val.substr( ho_val.lastIndexOf( '.' ) ); // GET DOT AND VALUE AFTER DOT
					var lafter = after.length-1; // GET LENGTH OF DOT AND VALUE - 1
					var divider = 1,i; // SET THE DIVIDER
					for ( i = 1; i <= lafter; i++ ) {
						divider *= 10; // MULTIPLY BY 10 FOR EVERY AFTER CHARACTER
					}
					var up = Math.round( ho_val * divider );
					for ( i = 2; up > divider ? i < up : i < divider; i++ ) {
			 			if ( up%i == 0 && divider%i == 0 ) {
			   				divider/=i;
			   				up/=i;
			   				i=1;
			  			}
					}
					document.getElementById( 'odd_input' ).value = up + '/' + divider; // SHOW RESULT
				}
				if ( which == 'am' ) { de_am(); } // TO AMERICAN
				if ( which == 'in' ) { de_in(); } // TO INDO
				if ( which == 'ma' ) { de_ma(); } // TO MALAY
				previous = which; // SET PREVIOUS FORMAT
				document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			}
			else {
				if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong Hong Kong Odd'; }
				if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültige Hong Kong Quote'; }
				if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy kurs hongkoński'; }
				if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный гонконгский коэффициент'; }
				if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Cote Hong Kong incorecte'; }
				previous == 'ho';
				document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[3].selected = 'selected';
				document.getElementById( 'odd_input' ).value = '0.91';
			}
		}
		else {
			previous = which; // SET PREVIOUS FORMAT
		}
	}
	// FROM INDO
	if ( previous == 'in' ) {
		var in_val = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE
		if ( in_val ) {
			if ( !isNaN( in_val ) ) {
				if ( in_val < 0 ) {
					de_val = 1 - 1 / in_val;
				}
				else {
					de_val = parseFloat( in_val ) + 1;
				}
				de_val = Math.round( de_val * 100 ) / 100; // FIX DECIMAL TO 2 DIGITS
				// TO DECIMAL
				if ( which == 'de' ) {
					document.getElementById( 'odd_input' ).value = de_val; // SHOW RESULT
				}
				// TO FRACTIONAL
				if ( which == 'fr' ) {
					function de_fr() {
						if ( de_val > 1 ) { // VALIDATOR
							divider = 100;
							de_val = de_val - 1;
							var up = Math.round( de_val * divider );
							for ( i = 2; up > divider ? i < up : i < divider; i++ ) {
					 			if ( up%i == 0 && divider%i == 0 ) {
					   				divider/=i;
					   				up/=i;
					   				i=1;
					  			}
							}
							document.getElementById( 'odd_input' ).value = +up+'/'+divider; // SHOW RESULT
						}
					}
					de_fr();
				}
				if ( which == 'am' ) { de_am(); } // TO AMERICAN
				if ( which == 'ho' ) { de_ho(); } // TO HONG KONG
				if ( which == 'ma' ) { de_ma(); } // TO MALAY
				previous = which; // SET PREVIOUS FORMAT
				document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			}
			else {
				if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong Indo Odd'; }
				if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültige Indo Quote'; }
				if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy kurs indo'; }
				if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный индонезийсикй коэффициент'; }
				if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Cote Indo icnorecte'; }
				previous == 'in';
				document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[4].selected = 'selected';
				document.getElementById( 'odd_input' ).value = '-1.1';
			}
		}
		else {
			previous = which; // SET PREVIOUS FORMAT
		}
	}
	// FROM MALAY
	if ( previous == 'ma' ) {
		var ma_val = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE
		if ( ma_val ) {
			if ( ma_val <= 1 && ma_val > -1 && ma_val != 0 ) {
				if ( ma_val < 0 ) {
					de_val = ( ma_val - 1 ) / ma_val;
				}
				else {
					de_val = parseFloat( ma_val ) + 1;
				}
				de_val = Math.round( de_val * 1000 ) / 1000; // FIX DECIMAL TO 2 DIGITS
				// TO DECIMAL
				if ( which == 'de' ) {
					document.getElementById( 'odd_input' ).value = de_val; // SHOW RESULT
				}
				if ( which == 'fr' ) { de_fr(); } // TO FRACTIONAL
				if ( which == 'am' ) { de_am(); } // TO AMERICAN
				if ( which == 'ho' ) { de_ho(); } // TO HONG KONG
				if ( which == 'in' ) { de_in(); } // TO INDO
				previous = which; // SET PREVIOUS FORMAT
				document.getElementById( 'odds_error' ).innerHTML = ''; // CLEAN ERROR
			}
			else {
				if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong Malay Odd'; }
				if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültige Malaiische Quote'; }
				if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy kurs malajski'; }
				if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный малазийский коэффициент'; }
				if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Cote malaieziene incorecte'; }
				previous == 'ma';
				document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[5].selected = 'selected';
				document.getElementById( 'odd_input' ).value = '0.91';
			}
		}
		else {
			previous = which; // SET PREVIOUS FORMAT
		}
	}
}
// END FORMAT CONVERSION
// FUNCTION WHEN THE CALCUATE BUTTON IS PRESSED
function calculate() {
	var stake_value = document.getElementById( 'stake' ).value.replace( "," , "." ); // GET STAKE VALUE
	if ( stake_value > 0 ) {
		document.getElementById( 'stake_error' ).innerHTML = '';
		var selector_format = document.getElementById( 'select_odds_format' ); // GET FORMAT SELECTION
		var selector_format_option = selector_format.options[selector_format.selectedIndex].value; // GET VALUE OF SELECTED OPTION
		checking = document.getElementById( 'odd_input' ).value.replace( "," , "." );
		if ( selector_format_option == 'de' ) {
			if ( checking > 1 ) { status = 'ok'; } else { status = 'no'; }
		}
		if ( selector_format_option == 'fr' ) {
			var FLOAT_REGEXP = /^[0-9]+[\/:]{1}[0-9]+$/; // VALIDATION
			if ( FLOAT_REGEXP.test( checking ) ) { status = 'ok'; } else { status = 'no'; }
		}
		if ( selector_format_option == 'am' ) {
			if ( !isNaN( checking ) && !( checking >= -100 && checking < 100  ) ) { status = 'ok'; } else { status = 'no'; }
		}
		if ( selector_format_option == 'ho' ) {
			if ( checking > 0 ) { status = 'ok'; } else { status = 'no'; }
		}
		if ( selector_format_option == 'in' ) {
			if ( !isNaN( checking ) ) { status = 'ok'; } else { status = 'no'; }
		}
		if ( selector_format_option == 'ma' ) {
			if ( checking <= 1 && checking > -1 && checking != 0 ) { status = 'ok'; } else { status = 'no'; }
		}
		if ( lang_selected == 'eng' ) { heading_text = 'Asian Handicap Bet Outcome'; }
		if ( lang_selected == 'ger' ) { heading_text = 'Asian Handicap Wette Ergebnis'; }
		if ( lang_selected == 'pol' ) { heading_text = 'Rozstrzygnięcie zakładu z Handicapem'; }
		if ( lang_selected == 'rus' ) { heading_text = 'Результат азиатского гандикапа'; }
		if ( lang_selected == 'rom' ) { heading_text = 'Rezultat Pariu Handicap Asiatic'; }

		if ( lang_selected == 'eng' ) { result_cell = 'Result'; }
		if ( lang_selected == 'ger' ) { result_cell = 'Ergebnis'; }
		if ( lang_selected == 'pol' ) { result_cell = 'Wynik'; }
		if ( lang_selected == 'rus' ) { result_cell = 'Результат'; }
		if ( lang_selected == 'rom' ) { result_cell = 'Rezultat'; }

		if ( lang_selected == 'eng' ) { payout_cell = 'Payout'; }
		if ( lang_selected == 'ger' ) { payout_cell = 'Auszahlung'; }
		if ( lang_selected == 'pol' ) { payout_cell = 'Wypłata'; }
		if ( lang_selected == 'rus' ) { payout_cell = 'Выплата'; }
		if ( lang_selected == 'rom' ) { payout_cell = 'Plată'; }

		if ( lang_selected == 'eng' ) { profit_cell = 'Profit'; }
		if ( lang_selected == 'ger' ) { profit_cell = 'Profit'; }
		if ( lang_selected == 'pol' ) { profit_cell = 'Zysk'; }
		if ( lang_selected == 'rus' ) { profit_cell = 'Прибыль'; }
		if ( lang_selected == 'rom' ) { profit_cell = 'Profit'; }

		if ( lang_selected == 'eng' ) { half_bets_cell = 'Half Bets'; }
		if ( lang_selected == 'ger' ) { half_bets_cell = 'Halbwetten'; }
		if ( lang_selected == 'pol' ) { half_bets_cell = 'Zakłady składowe'; }
		if ( lang_selected == 'rus' ) { half_bets_cell = 'Половина ставки'; }
		if ( lang_selected == 'rom' ) { half_bets_cell = 'Pariuri pe reprize'; }

		if ( lang_selected == 'eng' ) { overall_bet_cell = 'Overall Bet'; }
		if ( lang_selected == 'ger' ) { overall_bet_cell = 'Gesamtwette'; }
		if ( lang_selected == 'pol' ) { overall_bet_cell = 'Całkowity zakład'; }
		if ( lang_selected == 'rus' ) { overall_bet_cell = 'Полная ставка'; }
		if ( lang_selected == 'rom' ) { overall_bet_cell = 'Pariu general'; }

		if ( lang_selected == 'eng' ) { wager_cell = 'Wager'; }
		if ( lang_selected == 'ger' ) { wager_cell = 'Wette'; }
		if ( lang_selected == 'pol' ) { wager_cell = 'Zakład'; }
		if ( lang_selected == 'rus' ) { wager_cell = 'Ставка'; }
		if ( lang_selected == 'rom' ) { wager_cell = 'Pariu/miză'; }

		if ( lang_selected == 'eng' ) { msg_draw = 'Game ends in a draw'; }
		if ( lang_selected == 'ger' ) { msg_draw = 'Spiel endet unentschieden'; }
		if ( lang_selected == 'pol' ) { msg_draw = 'Mecz zakończony remisem'; }
		if ( lang_selected == 'rus' ) { msg_draw = 'Исход игры - ничья'; }
		if ( lang_selected == 'rom' ) { msg_draw = 'Jocul se termină la egalitate'; }

		if ( lang_selected == 'eng' ) { msg_win = home_or_away + ' wins'; }
		if ( lang_selected == 'ger' ) { msg_win = home_or_away + ' gewinnt'; }
		if ( lang_selected == 'pol' ) { msg_win = 'Wygrana drużyny ' + home_or_away; }
		if ( lang_selected == 'rus' ) { msg_win = home_or_away + ' побеждают'; }
		if ( lang_selected == 'rom' ) { msg_win = home_or_away + ' câştigă'; }

		if ( lang_selected == 'eng' ) { msg_lose = home_or_away + ' loses'; }
		if ( lang_selected == 'ger' ) { msg_lose = home_or_away + ' verliert'; }
		if ( lang_selected == 'pol' ) { msg_lose = 'Przegrana drużyny ' + home_or_away; }
		if ( lang_selected == 'rus' ) { msg_lose = home_or_away + ' проигрывают'; }
		if ( lang_selected == 'rom' ) { msg_lose = home_or_away + ' pierde'; }

		if ( status == 'ok' ) {
			document.getElementById( 'odds_error' ).innerHTML = '';
			// FORMAT
			var selector_format = document.getElementById( 'select_odds_format' ); // GET FORMAT SELECTION
			var selector_format_option = selector_format.options[selector_format.selectedIndex].value; // GET VALUE OF SELECTED OPTION
			// IF FORMAT IS DECIMAL
			if ( selector_format_option == 'de' ) {
				decimal_value = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // STAYS THE SAME
			}
			// IF FORMAT IS FRACTIONAL
			if ( selector_format_option == 'fr' ) {
				var decimal_value = eval( document.getElementById( 'odd_input' ).value ) + 1; // CONVERTING FROM FRACTIONAL TO DECIMAL
			}
			// IF FORMAT IS AMERICAN
			if ( selector_format_option == 'am' ) {
				var american_value = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE OF AMERICAN FORMAT
				if ( american_value < -100 ) {
					decimal_value = 1 - 100 / american_value;
				}
				if ( american_value > 99 ) {
					decimal_value = 1 + american_value / 100;
				}
			}
			// IF FORMAT IS HONG KONG
			if ( selector_format_option == 'ho' ) {
				decimal_value = parseFloat( document.getElementById( 'odd_input' ).value.replace( "," , "." ) ) + 1; // CONVERTING FROM HONG TO DECIMAL
			}
			// IF FORMAT IS INDO
			if ( selector_format_option == 'in' ) {
				var indo_value = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE OF INDO FORMAT
				if ( indo_value < 0 ) {
					decimal_value = 1 - 1 / indo_value;
				}
				else {
					decimal_value = parseFloat( indo_value ) + 1;
				}
			}
			// IF FORMAT IS MALAY
			if ( selector_format_option == 'ma' ) {
				var malay_value = document.getElementById( 'odd_input' ).value.replace( "," , "." ); // GET VALUE OF MALAY FORMAT
				if ( malay_value < 0 ) {
					decimal_value = ( malay_value - 1 ) / malay_value;
				}
				else {
					decimal_value = parseFloat( malay_value ) + 1;
				}
			}
			// ODD
			decimal_odd = Math.round( decimal_value * 100 ) / 100; // ODD VALUE
			// STAKE
			var stake_value = document.getElementById( 'stake' ).value.replace( "," , "." ); // GET STAKE VALUE
			// CHECK FINAL SCORE
			if ( document.getElementById( 'final_score_check' ).checked ) {
				var selector_home = document.getElementById( 'select_home' ); // GET HOME SELECTOR
				var selector_home_option = selector_home.options[selector_home.selectedIndex].value; // GET HOME SELECTED SCORE
				var selector_away = document.getElementById( 'select_away' ); // GET AWAY SELECTOR
				var selector_away_option = selector_away.options[selector_away.selectedIndex].value; // GET AWAY SELECTED SCORE
			}
			if ( selected_bet_on == 'home' || selected_bet_on == 'away' ) {
			var output = '';
			// HANDICAP
			var selector_handicap = document.getElementById( 'select_handicap' ); // GET HANDICAP SELECTOR
			var selector_handicap_option = selector_handicap.options[selector_handicap.selectedIndex].value; // GET HANDICAP SELECTED OPTION
			handicap_last_char = selector_handicap_option.slice(-1); // GET THE LAST CHARACTER FROM HANDICAP
			if ( handicap_last_char == '5' ) {
				handicap_type = 'split';
			}
			else {
				handicap_type = 'single';
			}
			// BET ON HOME / AWAY
			if ( selected_bet_on == 'away' ) { // INVERT SCORES FOR AWAY CASE
				pre_away = selector_home_option;
				pre_home = selector_away_option;
				selector_away_option = pre_away;
				selector_home_option = pre_home;
			}

			// SINGLE HANDICAP
			if ( handicap_type == 'single' ) {
				handicap_value = parseFloat( selector_handicap_option ); // HANDICAP
				home_team_score = parseFloat( selector_home_option ) + handicap_value; // FINAL HOME SCORE
				home_team_score = Math.round( home_team_score * 100 ) / 100; // FIXING DECIMALS
				away_team_score = Math.round( selector_away_option * 100 ) / 100; // AWAY TEAM SCORE
				// OUTPUT
				if ( final_score_type == 'score' ) {
					repeat_output = 2; // ONE REPEAT IF IT IS SCORE
					result_number = 0; // DONT ACTIVATE THE CASE FOR EVERY RESULT
				}
				else {
					repeat_output = 0; // REPEAT 3 TIMES IF IT IS ALL
					result_number = 1; // WILL SHOW EVERY TYPE OF RESULT
				}
				while ( repeat_output < 3 ) {
					if ( home_team_score > away_team_score || result_number == 1 ) {
						bet_result = lang_win;
						payout = stake_value * decimal_odd;
						profit = payout - stake_value;
					}
					if ( home_team_score == away_team_score || result_number == 2 ) {
						bet_result = lang_push;
						payout = stake_value;
						profit = 0;
					}
					if ( home_team_score < away_team_score || result_number == 3 ) {
						bet_result = lang_lose;
						payout = 0;
						profit = payout - stake_value;
					}
					var result_texta = new Array();
					repeat_times = 1;
					// WIN CASE TEXTS
					if ( result_number == 1 ) {
						if ( handicap_value == -4 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 5 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 5 oder mehr Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 5 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 5 голов или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 5 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == -3 || handicap_value == -3.5 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 4 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 4 oder mehr Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 4 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 4 гола или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 4 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == -2 || handicap_value == -2.5 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 3 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 3 oder mehr Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 3 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 3 гола или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 3 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == -1 || handicap_value == -1.5 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 2 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 2 oder mehr Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 2 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 2 гола или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 2 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == 0 || handicap_value == -0.5 ) {
							result_texta[1] = msg_win;
							repeat_times = 1;
						}
						if ( handicap_value == 0.5 || handicap_value == 1 ) {
							result_texta[1] = msg_win;
							result_texta[2] = msg_draw;
							repeat_times = 2;
						}
						if ( handicap_value == 1.5 || handicap_value == 2 ) {
							result_texta[1] = msg_win;
							result_texta[2] = msg_draw;
							if ( lang_selected == 'ger' ) { result_texta[3] = home_or_away + ' verliert mit 1 Tor Rückstand'; }
							if ( lang_selected == 'pol' ) { result_texta[3] = 'Przegrana drużyny ' + home_or_away + ' 1 golem'; }
							if ( lang_selected == 'rus' ) { result_texta[3] = home_or_away + ' - проигрыш с разницей в 1 гол'; }
							if ( lang_selected == 'rom' ) { result_texta[3] = home_or_away + ' pierde la diferenţă de 1 gol'; }
							repeat_times = 3;
						}
						if ( handicap_value == 2.5 || handicap_value == 3 ) {
							result_texta[1] = msg_win;
							result_texta[2] = msg_draw;
							if ( lang_selected == 'eng' ) { result_texta[3] = home_or_away + ' loses by 2 goals or less'; }
							if ( lang_selected == 'ger' ) { result_texta[3] = home_or_away + ' verliert mit 2 oder weniger Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[3] = 'Przegrana drużyny ' + home_or_away + ' 2 lub mniej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[3] = home_or_away + ' - проигрыш с разницей в 2 гола или менее'; }
							if ( lang_selected == 'rom' ) { result_texta[3] = home_or_away + ' pierde la diferenţă de 2 goluri sau mai puţin'; }
							repeat_times = 3;
						}
						if ( handicap_value == 3.5 || handicap_value == 4 ) {
							result_texta[1] = msg_win;
							result_texta[2] = msg_draw;
							if ( lang_selected == 'eng' ) { result_texta[3] = home_or_away + ' loses by 3 goals or less'; }
							if ( lang_selected == 'ger' ) { result_texta[3] = home_or_away + ' verliert mit 3 oder weniger Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[3] = 'Przegrana drużyny ' + home_or_away + ' 3 lub mniej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[3] = home_or_away + ' - проигрыш с разницей в 3 гола или менее'; }
							if ( lang_selected == 'rom' ) { result_texta[3] = home_or_away + ' pierde la diferenţă de 3 goluri sau mai puţin'; }
							repeat_times = 3;
						}
					}
					// PUSH CASE TEXTS
					if ( result_number == 2 ) {
						// FOR 1; 2; 3; 4; -1; -2; -3; -4
						x = -4;
						while ( x <= 4 ) {
							z = Math.abs(x); // MODULE OF X
							if ( lang_selected == 'eng' ) {
								if ( z > 1 ) { pl = 's'; } else { pl = ''; } // PLURAL
								if ( x <= 1 ) { win_lose_text = 'wins' }
								if ( x >= 1 ) { win_lose_text = 'loses' }
								if ( handicap_value == x ) {
									result_texta[1] = home_or_away + ' ' + win_lose_text + ' by ' + z + ' goal' + pl; // GENERATE TEXT
								}
							}
							if ( lang_selected == 'ger' ) {
								if ( z > 1 ) { pl = ' Toren'; } else { pl = ' Tor'; } // PLURAL
								if ( x <= 1 ) { win_lose_text = ' gewinnt'; win_lose_text2 = ' Vorsprung'}
								if ( x >= 1 ) { win_lose_text = ' verliert'; win_lose_text2 = ' Rückstand'}
								if ( handicap_value == x ) {
									result_texta[1] = home_or_away + win_lose_text + ' mit ' + z + pl + win_lose_text2; // GENERATE TEXT
								}
							}
							if ( lang_selected == 'pol' ) {
								if ( z > 1 ) { pl = 'golami'; } else { pl = 'golem'; } // PLURAL
								if ( x <= 1 ) { win_lose_text = 'Wygrana' }
								if ( x >= 1 ) { win_lose_text = 'Przegrana' }
								if ( handicap_value == x ) {
									result_texta[1] = win_lose_text + ' drużyny ' + home_or_away + ' ' + z + ' ' + pl; // GENERATE TEXT
								}
							}
							if ( lang_selected == 'rus' ) {
								if ( z > 1 ) { pl = 'гола'; } else { pl = 'гол'; } // PLURAL
								if ( z > 4 ) { pl = 'голов'; }
								if ( x <= 1 ) { win_lose_text = 'победа' }
								if ( x >= 1 ) { win_lose_text = 'проигрыш' }
								if ( handicap_value == x ) {
									result_texta[1] = home_or_away + ' - ' + win_lose_text + ' с разницей в ' + z + ' ' + pl; // GENERATE TEXT
								}
							}
							if ( lang_selected == 'rom' ) {
								if ( z > 1 ) { pl = 'goluri'; } else { pl = 'gol'; } // PLURAL
								if ( x <= 1 ) { win_lose_text = 'câştigă' }
								if ( x >= 1 ) { win_lose_text = 'pierde' }
								if ( handicap_value == x ) {
									result_texta[1] = home_or_away + ' ' + win_lose_text + ' la diferenţă de ' + z + ' ' + pl; // GENERATE TEXT
								}
							}
							x++; // CHANGE VALUE
						}
						if ( handicap_value == 0 ) {
							result_texta[1] = msg_draw;
						}
					}
					// LOSE CASE TEXTS
					if ( result_number == 3 ) {
						if ( handicap_value == -3.5 || handicap_value == -4 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 3 goals or less'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 3 oder weniger Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 3 lub mniej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 3 гола или менее'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 3 goluri sau mai puţin'; }
							result_texta[2] = msg_draw;
							result_texta[3] = msg_lose;
							repeat_times = 3;
						}
						if ( handicap_value == -2.5 || handicap_value == -3 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 2 goals or less'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 2 oder weniger Toren Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 2 lub mniej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 2 гола или менее'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 2 goluri sau mai puţin'; }
							result_texta[2] = msg_draw;
							result_texta[3] = msg_lose;
							repeat_times = 3;
						}
						if ( handicap_value == -1.5 || handicap_value == -2 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' wins by 1 goal'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' gewinnt mit 1 Tor Vorsprung'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 1 golem'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - победа с разницей в 1 гол'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' câştigă la diferenţă de 1 gol'; }
							result_texta[2] = msg_draw;
							result_texta[3] = msg_lose;
							repeat_times = 3;
						}
						if ( handicap_value == -0.5 || handicap_value == -1 ) {
							result_texta[1] = msg_draw;
							result_texta[2] = msg_lose;
							repeat_times = 2;
						}
						if ( handicap_value == 0 || handicap_value == 0.5 ) {
							result_texta[1] = msg_lose;
							repeat_times = 1;
						}
						if ( handicap_value == 1 || handicap_value == 1.5 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' loses by 2 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' verliert mit 2 oder mehr Toren Rückstand'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 2 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - проигрыш с разницей в 2 гола или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' pierde la diferenţă de 2 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == 2 || handicap_value == 2.5 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' loses by 3 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' verliert mit 3 oder mehr Toren Rückstand'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 3 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - проигрыш с разницей в 3 гола или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' pierde la diferenţă de 3 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == 3 || handicap_value == 3.5 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' loses by 4 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' verliert mit 4 oder mehr Toren Rückstand'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 4 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - проигрыш с разницей в 4 гола или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' pierde la diferenţă de 4 goluri sau mai mult'; }
							repeat_times = 1;
						}
						if ( handicap_value == 4 ) {
							if ( lang_selected == 'eng' ) { result_texta[1] = home_or_away + ' loses by 5 goals or more'; }
							if ( lang_selected == 'ger' ) { result_texta[1] = home_or_away + ' verliert mit 5 oder mehr Toren Rückstand'; }
							if ( lang_selected == 'pol' ) { result_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 5 lub więcej golami'; }
							if ( lang_selected == 'rus' ) { result_texta[1] = home_or_away + ' - проигрыш с разницей в 5 голов или более'; }
							if ( lang_selected == 'rom' ) { result_texta[1] = home_or_away + ' pierde la diferenţă de 5 goluri sau mai mult'; }
							repeat_times = 1;
						}
					}
					start_repeat = 0;
					while ( start_repeat < repeat_times ) {
						// HEADING
						if ( final_score_type == 'all' ) {
							output = output + '<div class="result-title">' + result_texta[start_repeat+1] + '</div>';
						}
						// HEADING
						if ( final_score_type == 'score' ) {
							output = output + '<div class="result-title">' + heading_text + '</div>';
							repeat_times = 1;
						}
						payout = Math.round( payout * 100 ) / 100;
						profit = Math.round( profit * 100 ) / 100;
						output = output + '<table id="ds-result-table-single">'; // START TABLE
						output = output + '<tr><td>' + result_cell + ':</td><td>' + bet_result + '</td></tr>';
						output = output + '<tr><td>' + payout_cell + ':</td><td>' + payout + '</td></tr>';
						output = output + '<tr><td>' + profit_cell + ':</td><td>' + profit + '</td></tr>';
						output = output + '</table>'; // END TABLE
						start_repeat++;
					}
					repeat_output++;
					result_number++;
					// EXCLUDE SOME DRAW CASES
					if ( handicap_value == 0.5 || handicap_value == 1.5 || handicap_value == 2.5 || handicap_value == 3.5 || handicap_value == -0.5 || handicap_value == -1.5 || handicap_value == -2.5 || handicap_value == -3.5 ) {
						result_number++;
						repeat_output++;
					}
				}
			}
			// SPLIT HANDICAP
			if ( handicap_type == 'split' ) {
				handicap_value = parseFloat( selector_handicap_option );
				if ( handicap_value > 0 ) {
					handicap_value_a = handicap_value - 0.25;
					handicap_value_b = handicap_value + 0.25;
				}
				if ( handicap_value < 0 ) {
					handicap_value_a = handicap_value + 0.25;
					handicap_value_b = handicap_value - 0.25;
				}
				wager = stake_value / 2;
				wager = Math.round( wager * 100 ) / 100;
				if ( final_score_type == 'score' ) {
					repeat_output = 2; // ONE OUTPUT
					result_case = 0; // NO CASES
				}
				else {
					repeat_output = 0; // 3 OUTPUTS
					result_case = 1; // FOR 3 CASES
				}
				while ( repeat_output < 3 ) {
					var split_texta = new Array();
					split_repeat = 1;
					if ( final_score_type == 'all' ) {
						if ( result_case == 1 ) {
							if ( handicap_value == 3.75 ) {
								selector_home_option = 0;
								selector_away_option = 0;
								split_texta[1] = msg_win;
								split_texta[2] = msg_draw;
								if ( lang_selected == 'eng' ) { split_texta[3] = home_or_away + ' loses by 3 goals'; }
								if ( lang_selected == 'ger' ) { split_texta[3] = home_or_away + ' verliert mit 3 Toren Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[3] = 'Przegrana drużyny ' + home_or_away + ' 3 golami'; }
								if ( lang_selected == 'rus' ) { split_texta[3] = home_or_away + ' - проигрыш с разницей в 3 гола'; }
								if ( lang_selected == 'rom' ) { split_texta[3] = home_or_away + ' pierde la diferenţă de 3 goluri'; }
								split_repeat = 3;
							}
							if ( handicap_value == 2.75 || handicap_value == 3.25) {
								selector_home_option = 0;
								selector_away_option = 0;
								split_texta[1] = msg_win;
								split_texta[2] = msg_draw;
								if ( lang_selected == 'eng' ) { split_texta[3] = home_or_away + ' loses by 2 goals'; }
								if ( lang_selected == 'ger' ) { split_texta[3] = home_or_away + ' verliert mit 2 Toren Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[3] = 'Przegrana drużyny ' + home_or_away + ' 2 golami'; }
								if ( lang_selected == 'rus' ) { split_texta[3] = home_or_away + ' - проигрыш с разницей в 2 гола'; }
								if ( lang_selected == 'rom' ) { split_texta[3] = home_or_away + ' pierde la diferenţă de 2 goluri'; }
								split_repeat = 3;
							}
							if ( handicap_value == 1.75 || handicap_value == 2.25) {
								selector_home_option = 0;
								selector_away_option = 0;
								split_texta[1] = msg_win;
								split_texta[2] = msg_draw;
								if ( lang_selected == 'eng' ) { split_texta[3] = home_or_away + ' loses by 1 goal'; }
								if ( lang_selected == 'ger' ) { split_texta[3] = home_or_away + ' verliert mit 1 Tor Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[3] = 'Przegrana drużyny ' + home_or_away + ' 1 golem'; }
								if ( lang_selected == 'rus' ) { split_texta[3] = home_or_away + ' - проигрыш с разницей в 1 гол'; }
								if ( lang_selected == 'rom' ) { split_texta[3] = home_or_away + ' pierde la diferenţă de 1 gol'; }
								split_repeat = 3;
							}
							if ( handicap_value == 0.75 || handicap_value == 1.25) {
								selector_home_option = 0;
								selector_away_option = 0;
								split_texta[1] = msg_win;
								split_texta[2] = msg_draw;
								split_repeat = 2;
							}
							if ( handicap_value == -0.25 || handicap_value == 0.25) {
								selector_home_option = 1;
								selector_away_option = 0;
								split_texta[1] = msg_win;
								split_repeat = 1;
							}
							if ( handicap_value == -0.75 || handicap_value == -1.25 ) {
								selector_home_option = 2;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 2 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 2 oder mehr Toren Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' gości 2 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 2 гола или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 2 goluri sau mai mult'; }
								split_repeat = 1;
							}
							if ( handicap_value == -1.75 || handicap_value == -2.25 ) {
								selector_home_option = 3;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 3 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 3 oder mehr Toren Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' gości 3 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 3 гола или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 3 goluri sau mai mult'; }
								split_repeat = 1;
							}
							if ( handicap_value == -2.75 || handicap_value == -3.25 ) {
								selector_home_option = 4;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 4 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 4 oder mehr Toren Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' gości 4 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 4 гола или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 4 goluri sau mai mult'; }
								split_repeat = 1;
							}
							if ( handicap_value == -3.75 ) {
								selector_home_option = 5;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 5 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 5 oder mehr Toren Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' gości 5 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 5 голов или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 5 goluri sau mai mult'; }
								split_repeat = 1;
							}
						}
						if ( result_case == 2 ) {
							x = -3.75; y = -4.25; a = 4; b = 0;
							while ( x < 5 ) {
								if ( handicap_value == x || handicap_value == y ) {
									goal = a - b;
									selector_home_option = a;
									selector_away_option = b;
									if ( lang_selected == 'eng' ) {
										if ( a > b ) { win_lose_text = 'wins'; } else { win_lose_text = 'loses'; }
										if ( Math.abs(goal) > 1 ) { pl = 's'; } else { pl = ''; } // PLURAL
										split_texta[1] = home_or_away + ' ' + win_lose_text + ' by ' + Math.abs(goal) + ' goal' + pl;
									}
									if ( lang_selected == 'ger' ) {
										if ( a > b ) {
											win_lose_text = ' gewinnt';
											win_lose_text2 = ' Vorsprung';
										}
										else {
											win_lose_text = ' verliert';
											win_lose_text2 = ' Rückstand';
										}
										if ( Math.abs(goal) > 1 ) { pl = ' Toren'; } else { pl = ' Tor'; } // PLURAL
										split_texta[1] = home_or_away + win_lose_text + ' mit ' + Math.abs(goal) + pl + win_lose_text2;
									}
									if ( lang_selected == 'pol' ) {
										if ( a > b ) { win_lose_text = 'Wygrana'; } else { win_lose_text = 'Przegrana'; }
										if ( Math.abs(goal) > 1 ) { pl = 'golami'; } else { pl = 'golem'; } // PLURAL
										split_texta[1] = win_lose_text + ' drużyny ' + home_or_away + ' ' + Math.abs(goal) + ' ' + pl;
									}
									if ( lang_selected == 'rus' ) {
										if ( a > b ) { win_lose_text = 'победа'; } else { win_lose_text = 'проигрыш'; }
										if ( Math.abs(goal) > 1 ) { pl = 'гола'; } else { pl = 'гол'; } // PLURAL
										split_texta[1] = home_or_away + ' - ' + win_lose_text + ' с разницей в ' + Math.abs(goal) + ' ' + pl;
									}
									if ( lang_selected == 'rom' ) {
										if ( a > b ) { win_lose_text = 'câştigă'; } else { win_lose_text = 'pierde'; }
										if ( Math.abs(goal) > 1 ) { pl = 'goluri'; } else { pl = 'gol'; } // PLURAL
										split_texta[1] = home_or_away + ' ' + win_lose_text + ' la diferenţă de ' + Math.abs(goal) + ' ' + pl;
									}
								}
								if ( x < 1 ) { a--; } else { b++; }
								x++;
								y++;
							}
							if ( handicap_value == 0.25 || handicap_value == -0.25 ) {
								selector_home_option = 0;
								selector_away_option = 0;
								split_texta[1] = msg_draw;
								split_repeat = 1;
							}
						}
						if ( result_case == 3 ) {
							if ( handicap_value == -3.75 ) {
								selector_home_option = 0;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 3 goals or less'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 3 oder weniger Toren Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 3 lub mniej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 3 гола или менее'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 3 goluri sau mai puţin'; }
								split_texta[2] = msg_draw;
								split_texta[3] = msg_lose;
								split_repeat = 3;
							}
							if ( handicap_value == -2.75 || handicap_value == -3.25 ) {
								selector_home_option = 0;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 2 goals or less'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 2 oder weniger Toren Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 2 lub mniej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 2 гола или менее'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 2 goluri sau mai puţin'; }
								split_texta[2] = msg_draw;
								split_texta[3] = msg_lose;
								split_repeat = 3;
							}
							if ( handicap_value == -1.75 || handicap_value == -2.25 ) {
								selector_home_option = 0;
								selector_away_option = 0;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' wins by 1 goal'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' gewinnt mit 1 Tor Vorsprung'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Wygrana drużyny ' + home_or_away + ' 1 lub mniej golem'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - победа с разницей в 1 гол'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' câştigă la diferenţă de 1 gol'; }
								split_texta[2] = msg_draw;
								split_texta[3] = msg_lose;
								split_repeat = 3;
							}
							if ( handicap_value == -0.75 || handicap_value == -1.25 ) {
								selector_home_option = 0;
								selector_away_option = 0;
								split_texta[1] = msg_draw;
								split_texta[2] = msg_lose;
								split_repeat = 2;
							}
							if ( handicap_value == 0.25 || handicap_value == -0.25 ) {
								selector_home_option = 0;
								selector_away_option = 1;
								split_texta[1] = msg_lose;
								split_repeat = 1;
							}
							if ( handicap_value == 0.75 || handicap_value == 1.25 ) {
								selector_home_option = 0;
								selector_away_option = 2;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' loses by 2 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' verliert mit 2 oder mehr Toren Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 2 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - проигрыш с разницей в 2 гола или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' pierde la diferenţă de 2 goluri sau mai mult'; }
								split_repeat = 1;
							}
							if ( handicap_value == 1.75 || handicap_value == 2.25 ) {
								selector_home_option = 0;
								selector_away_option = 3;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' loses by 3 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' verliert mit 3 oder mehr Toren Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 3 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - проигрыш с разницей в 3 гола или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' pierde la diferenţă de 3 goluri sau mai mult'; }
								split_repeat = 1;
							}
							if ( handicap_value == 2.75 || handicap_value == 3.25 ) {
								selector_home_option = 0;
								selector_away_option = 4;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' loses by 4 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' verliert mit 4 oder mehr Toren Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Przegrana drużyny ' + home_or_away+ ' 4 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - проигрыш с разницей в 4 гола или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' pierde la diferenţă de 4 goluri sau mai mult'; }
								split_repeat = 1;
							}
							if ( handicap_value == 3.75) {
								selector_home_option = 0;
								selector_away_option = 5;
								if ( lang_selected == 'eng' ) { split_texta[1] = home_or_away + ' loses by 5 goals or more'; }
								if ( lang_selected == 'ger' ) { split_texta[1] = home_or_away + ' verliert mit 5 oder mehr Toren Rückstand'; }
								if ( lang_selected == 'pol' ) { split_texta[1] = 'Przegrana drużyny ' + home_or_away + ' 5 lub więcej golami'; }
								if ( lang_selected == 'rus' ) { split_texta[1] = home_or_away + ' - проигрыш с разницей в 5 голов или более'; }
								if ( lang_selected == 'rom' ) { split_texta[1] = home_or_away + ' pierde la diferenţă de 5 goluri sau mai mult'; }
								split_repeat = 1;
							}
						}
					}
					// RESULT A
					home_team_score_a = parseFloat( selector_home_option ) + handicap_value_a;
					home_team_score_a = Math.round( home_team_score_a * 100 ) / 100;
					away_team_score = selector_away_option;
					away_team_score = Math.round( away_team_score * 100 ) / 100;
					if ( home_team_score_a > away_team_score ) {
						bet_result_a = lang_win;
						payout_a = wager * decimal_odd;
						profit_a = payout_a - wager;
					}
					if ( home_team_score_a == away_team_score ) {
						bet_result_a = lang_push;
						payout_a = wager;
						profit_a = 0;
					}
					if ( home_team_score_a < away_team_score ) {
						bet_result_a = lang_lose;
						payout_a = 0;
						profit_a = payout_a - wager;
					}
					// RESULT B
					home_team_score_b = parseFloat( selector_home_option ) + handicap_value_b;
					home_team_score_b = Math.round( home_team_score_b * 100 ) / 100;
					away_team_score = selector_away_option;
					away_team_score = Math.round( away_team_score * 100 ) / 100;
					if ( home_team_score_b > away_team_score ) {
						bet_result_b = lang_win;
						payout_b = wager * decimal_odd;
						profit_b = payout_b - wager;
					}
					if ( home_team_score_b == away_team_score ) {
						bet_result_b = lang_push;
						payout_b = wager;
						profit_b = 0;
					}
					if ( home_team_score_b < away_team_score ) {
						bet_result_b = lang_lose;
						payout_b = 0;
						profit_b = payout_b - wager;
					}
					// START OUTPUT
					split_start = 0;
					while ( split_start < split_repeat ) {
						payout_a = Math.round( payout_a * 100 ) / 100;
						payout_b = Math.round( payout_b * 100 ) / 100;
						profit_a = Math.round( profit_a * 100 ) / 100;
						profit_b = Math.round( profit_b * 100 ) / 100;
						if ( final_score_type == 'all' ) {
							output = output + '<div class="result-title">' + split_texta[split_start+1] + '</div>';
						}
						if ( final_score_type == 'score' ) {
							output = output + '<div class="result-title">' + heading_text + '</div>';
						}
						output = output + '<table id="ds-result-table-split">'; // START TABLE
						output = output + '<tr><td></td><td colspan="2">' + half_bets_cell + '</td><td>' + overall_bet_cell + '</td></tr>';
						if ( lang_selected == 'eng' ) { handicap_cell = 'Handicap'; }
						if ( lang_selected == 'ger' ) { handicap_cell = 'Handicap'; }
						if ( lang_selected == 'pol' ) { handicap_cell = 'Handicap'; }
						if ( lang_selected == 'rus' ) { handicap_cell = 'Гандикап'; }
						if ( lang_selected == 'rom' ) { handicap_cell = 'Handicap'; }
						output = output + '<tr><td>' + handicap_cell + ':</td><td>' + handicap_value_a + '</td><td>' + handicap_value_b + '</td><td>' + selector_handicap_option + '</td></tr>';
						wager_sum = wager * 2;
						output = output + '<tr><td>' + wager_cell + ':</td><td>' + wager + '</td><td>' + wager + '</td><td>' + wager_sum + '</td></tr>';
						if ( bet_result_a == bet_result_b ) {
							bet_result_final = bet_result_a;
						}
						else {
							if ( bet_result_a == lang_win || bet_result_b == lang_win ) {
								bet_result_final = lang_half_win;
							}
							else {
								bet_result_final = lang_half_lose;
							}
						}
						output = output + '<tr><td>' + result_cell + ':</td><td>' + bet_result_a + '</td><td>' + bet_result_b + '</td><td>' + bet_result_final + '</td></tr>';
						payout_sum = payout_a + payout_b;
						payout_sum = Math.round( payout_sum * 100 ) / 100;
						output = output + '<tr><td>' + payout_cell + ':</td><td>' + payout_a + '</td><td>' + payout_b + '</td><td>' + payout_sum + '</td></tr>';
						profit_sum = profit_a + profit_b;
						profit_sum = Math.round( profit_sum * 100 ) / 100;
						output = output + '<tr><td>' + profit_cell + ':</td><td>' + profit_a + '</td><td>' + profit_b + '</td><td>' + profit_sum + '</td></tr>';
						output = output + '</table>';
						split_start++;
					}
					repeat_output++;
					result_case++;
				}
			}
			document.getElementById( 'result' ).innerHTML = output; // MAKE THE OUTPUT
			}
			else {
				output = '';
				var selector_over = document.getElementById( 'select_over_value' ); // GET HANDICAP SELECTOR
				var selector_over_option = selector_over.options[selector_over.selectedIndex].value; // GET HANDICAP SELECTED OPTION
				score_sum = parseFloat( selector_home_option ) + parseFloat( selector_away_option );
				over_value_last_char = selector_over_option.slice(-1); // GET THE LAST CHARACTER FROM HANDICAP
				if ( over_value_last_char == '5' ) {
					over_value_type = 'part';
				}
				else {
					over_value_type = 'class';
				}

				if ( selected_bet_on == "over" ) {

					// CLASSICAL VALUE
					if ( over_value_type == 'class' ) {

						if ( final_score_type == 'score' ) {
							repeat_time = 2;
							repeat_case = 0;
							if ( lang_selected == 'eng' ) { over_title = 'Over Bet Outcome'; }
							if ( lang_selected == 'ger' ) { over_title = 'Über-Wette Ergebnis'; }
							if ( lang_selected == 'pol' ) { over_title = 'Rozstrzygnięcie zakładu Powyżej'; }
							if ( lang_selected == 'rus' ) { over_title = 'Результат ставки на повышение'; }
							if ( lang_selected == 'rom' ) { over_title = 'Rezultat Pariu Over'; }
						}
						else {
							repeat_time = 0;
							repeat_case = 1;
							over_title = 'default title';
						}

						while ( repeat_time < 3 ) {
							if ( score_sum > selector_over_option || repeat_case == 1 ) {
								over_result = lang_win;
								payout = stake_value * decimal_odd;
								profit = payout - stake_value;
							}
							if ( score_sum == selector_over_option || repeat_case == 2 ) {
								over_result = lang_push;
								payout = stake_value;
								profit = 0;
							}
							if ( score_sum < selector_over_option || repeat_case == 3 ) {
								over_result = lang_lose;
								payout = 0;
								profit = payout - stake_value;
							}
							if ( repeat_case == 1 ) {
								goals = Math.floor( selector_over_option ) + 1;
								if ( lang_selected == 'eng' ) { over_title = 'Total number of goals is ' + goals + ' or more'; }
								if ( lang_selected == 'ger' ) { over_title = 'Gesamtanzahl der Tore: ' + goals + ' oder mehr'; }
								if ( lang_selected == 'pol' ) { over_title = 'Całkowita liczba goli wynosi ' + goals + ' lub więcej'; }
								if ( lang_selected == 'rus' ) { over_title = 'Общее количество голов - ' + goals + ' или более'; }
								if ( lang_selected == 'rom' ) { over_title = 'Numărul total de goluri este ' + goals + ' sau mai mult'; }
								lost_goals = goals - 1;
							}
							if ( repeat_case == 2 && selector_over_option % 1 == 0 ) {
								goals = Math.round( selector_over_option );
								if ( lang_selected == 'eng' ) { over_title = 'Total number of goals is ' + goals; }
								if ( lang_selected == 'ger' ) { over_title = 'Gesamtanzahl der Tore: ' + goals; }
								if ( lang_selected == 'pol' ) { over_title = 'Całkowita liczba goli wynosi ' + goals; }
								if ( lang_selected == 'rus' ) { over_title = 'Общее количество голов - ' + goals; }
								if ( lang_selected == 'rom' ) { over_title = 'Numărul total de goluri este ' + goals; }
								lost_goals = goals - 1;
							}
							if ( repeat_case == 3 ) {
								if ( lang_selected == 'eng' ) { over_title = 'Total number of goals is ' + lost_goals + ' or less'; }
								if ( lang_selected == 'ger' ) { over_title = 'Gesamtanzahl der Tore: ' + lost_goals + ' oder weniger'; }
								if ( lang_selected == 'pol' ) { over_title = 'Całkowita liczba goli wynosi ' + lost_goals + ' lub mniej'; }
								if ( lang_selected == 'rus' ) { over_title = 'Общее количество голов - ' + lost_goals + ' или менее'; }
								if ( lang_selected == 'rom' ) { over_title = 'Numărul total de goluri este ' + lost_goals + ' sau mai puţin'; }
								if ( lost_goals == 0 ) {
									if ( lang_selected == 'eng' ) { over_title = 'Total number of goals is ' + lost_goals; }
									if ( lang_selected == 'ger' ) { over_title = 'Gesamtanzahl der Tore: ' + lost_goals; }
									if ( lang_selected == 'pol' ) { over_title = 'Całkowita liczba goli wynosi ' + lost_goals; }
									if ( lang_selected == 'rus' ) { over_title = 'Общее количество голов - ' + lost_goals; }
									if ( lang_selected == 'rom' ) { over_title = 'Numărul total de goluri este ' + goals; }
								}
							}
							output = output + '<div class="result-title">' + over_title + '</div>';
							output = output + '<table id="ds-result-table-single">';
							output = output + '<tr><td>' + result_cell + ':</td><td>' + over_result + '</td></tr>';
							output = output + '<tr><td>' + payout_cell + ':</td><td>' + Math.round( payout * 100 ) / 100 + '</td></tr>';
							output = output + '<tr><td>' + profit_cell + ':</td><td>' + Math.round( profit * 100 ) / 100 + '</td></tr>';
							output = output + '</table>';
							repeat_time++;
							repeat_case++;
							if ( selector_over_option % 1 != 0 ) {
								repeat_case++;
								repeat_time++;
							}
						}
					}
					// PARTICULAR VALUE
					if ( over_value_type == 'part' ) {
						if ( final_score_type == 'score' ) {
							repeat_time = 2;
							if ( lang_selected == 'eng' ) { over_title = 'Over Bet Outcome'; }
							if ( lang_selected == 'ger' ) { over_title = 'Über-Wette Ergebnis'; }
							if ( lang_selected == 'pol' ) { over_title = 'Rozstrzygnięcie zakładu Powyżej'; }
							if ( lang_selected == 'rus' ) { over_title = 'Ставка на повышение'; }
							if ( lang_selected == 'rom' ) { over_title = 'Rezultat Pariu Over'; }
						}
						else {
							repeat_time = 0;
							over_title = 'default title';
						}
						while ( repeat_time < 3 ) {

							over_bet_a = parseFloat( selector_over_option ) - 0.25;
							over_bet_b = parseFloat( selector_over_option ) + 0.25;
							wager = stake_value / 2;
							if ( final_score_type != 'score' ) { score_sum = Math.floor( over_bet_b ) + 1 - repeat_time; }
							if ( score_sum > over_bet_a ) {
								result_a = lang_win;
								pay_a = wager * decimal_odd;
								profit_a = pay_a - wager;
							}
							if ( score_sum == over_bet_a ) {
								result_a = lang_push;
								pay_a = wager;
								profit_a = 0;
							}
							if ( score_sum < over_bet_a ) {
								result_a = lang_lose;
								pay_a = 0;
								profit_a = pay_a - wager;
							}
							if ( score_sum > over_bet_b ) {
								result_b = lang_win;
								pay_b = wager * decimal_odd;
								profit_b = pay_b - wager;
							}
							if ( score_sum == over_bet_b ) {
								result_b = lang_push;
								pay_b = wager;
								profit_b = 0;
							}
							if ( score_sum < over_bet_b ) {
								result_b = lang_lose;
								pay_b = 0;
								profit_b = pay_b - wager;
							}

							pay_a = Math.round( pay_a * 100 ) / 100;
							pay_b = Math.round( pay_b * 100 ) / 100;
							pay_total = pay_a + pay_b;
							pay_total = Math.round( pay_total * 100 ) / 100;
							profit_a = Math.round( profit_a * 100 ) / 100;
							profit_b = Math.round( profit_b * 100 ) / 100;
							profit_total = profit_a + profit_b;
							profit_total = Math.round( profit_total * 100 ) / 100;

							if ( result_a == result_b ) {
								result_final = result_a;
							}
							else {
								if ( result_a == lang_win || result_b == lang_win ) {
									result_final = lang_half_win;
								}
								else {
									result_final = lang_half_lose;
								}
							}
							if ( lang_selected == 'eng' ) {
								if ( final_score_type != 'score' ) {
									if ( result_final == 'Win' ) {
										over_title = 'Total number of goals is ' + score_sum + ' or more';
									}
									if ( result_final == 'Lose' ) {
										over_title = 'Total number of goals is ' + score_sum + ' or less';
										if ( score_sum == 0 ) {
											over_title = 'Total number of goals is ' + score_sum;
										}
									}
									if ( result_final == 'Half Win' || result_final == 'Half Lose' ) {
										over_title = 'Total number of goals is ' + score_sum;
									}
								}
							}
							if ( lang_selected == 'ger' ) {
								if ( final_score_type != 'score' ) {
									if ( result_final == 'Gewinn' ) {
										over_title = 'Gesamtanzahl der Tore: ' + score_sum + ' oder mehr';
									}
									if ( result_final == 'Verlust' ) {
										over_title = 'Gesamtanzahl der Tore: ' + score_sum + ' oder weniger';
										if ( score_sum == 0 ) {
											over_title = 'Gesamtanzahl der Tore: ' + score_sum;
										}
									}
									if ( result_final == 'halber Gewinn' || result_final == 'halber Verlust' ) {
										over_title = 'Gesamtanzahl der Tore: ' + score_sum;
									}
								}
							}
							if ( lang_selected == 'pol' ) {
								if ( final_score_type != 'score' ) {
									if ( result_final == 'Wygrana' ) {
										over_title = 'Całkowita liczba goli wynosi ' + score_sum + ' lub więcej';
									}
									if ( result_final == 'Przegrana' ) {
										over_title = 'Całkowita liczba goli wynosi ' + score_sum + ' lub mniej';
										if ( score_sum == 0 ) {
											over_title = 'Całkowita liczba goli wynosi ' + score_sum;
										}
									}
									if ( result_final == 'Połowa wygrana' || result_final == 'Połowa przegrana' ) {
										over_title = 'Całkowita liczba goli wynosi ' + score_sum;
									}
								}
							}
							if ( lang_selected == 'rus' ) {
								if ( final_score_type != 'score' ) {
									if ( result_final == lang_win ) {
										over_title = 'Общее количество голов - ' + score_sum + ' или более';
									}
									if ( result_final == lang_lose ) {
										over_title = 'Общее количество голов - ' + score_sum + ' или менее';
										if ( score_sum == 0 ) {
											over_title = 'Общее количество голов - ' + score_sum;
										}
									}
									if ( result_final == lang_half_win || result_final == lang_half_win ) {
										over_title = 'Общее количество голов - ' + score_sum;
									}
								}
							}
							if ( lang_selected == 'rom' ) {
								if ( final_score_type != 'score' ) {
									if ( result_final == lang_win ) {
										over_title = 'Numărul total de goluri este ' + score_sum + ' sau mai mult';
									}
									if ( result_final == lang_lose ) {
										over_title = 'Numărul total de goluri este ' + score_sum + ' sau mai puţin';
										if ( score_sum == 0 ) {
											over_title = 'Numărul total de goluri este ' + score_sum;
										}
									}
									if ( result_final == lang_half_win || result_final == lang_half_win ) {
										over_title = 'Numărul total de goluri este ' + score_sum;
									}
								}
							}
							if ( lang_selected == 'eng' ) { over_bet_cell = 'Over Bet'; }
							if ( lang_selected == 'ger' ) { over_bet_cell = 'Über-Wette'; }
							if ( lang_selected == 'pol' ) { over_bet_cell = 'Zakład na Powyżej'; }
							if ( lang_selected == 'rus' ) { over_bet_cell = 'Ставка на повышение'; }
							if ( lang_selected == 'rom' ) { over_bet_cell = 'Pariu Deasupra'; }
							output = output + '<div class="result-title">' + over_title + '</div>';
							output = output + '<table id="ds-result-table-split">';
							output = output + '<tr><td></td><td colspan="2">' + half_bets_cell + '</td><td>' + overall_bet_cell + '</td></tr>'
							output = output + '<tr><td>' + over_bet_cell + ':</td><td>' + over_bet_a + '</td><td>' + over_bet_b + '</td><td>' + selector_over_option + '</td></tr>';
							output = output + '<tr><td>' + wager_cell + ':</td><td>' + wager + '</td><td>' + wager + '</td><td>' + stake_value + '</td></tr>';
							output = output + '<tr><td>' + result_cell + ':</td><td>' + result_a + '</td><td>' + result_b + '</td><td>' + result_final + '</td></tr>';
							output = output + '<tr><td>' + payout_cell + ':</td><td>' + pay_a + '</td><td>' + pay_b + '</td><td>' + pay_total + '</td></tr>';
							output = output + '<tr><td>' + profit_cell + ':</td><td>' + profit_a + '</td><td>' + profit_b + '</td><td>' + profit_total + '</td></tr>';
							output = output + '</table>';
							repeat_time++;
						}
					}
					document.getElementById( 'result' ).innerHTML = output; // MAKE THE OUTPUT
				}
				if ( selected_bet_on == "under" ) {
					// CLASSICAL VALUE
					if ( over_value_type == 'class' ) {
						if ( final_score_type == 'score' ) {
							repeat_time = 2;
							repeat_case = 0;
							if ( lang_selected == 'eng' ) { over_title = 'Under Bet Outcome'; }
							if ( lang_selected == 'ger' ) { over_title = 'Unter-Wette Ergebnis'; }
							if ( lang_selected == 'pol' ) { over_title = 'Rozstrzygnięcie zakładu Poniżej'; }
							if ( lang_selected == 'rus' ) { over_title = 'Результат ставки на понижение'; }
							if ( lang_selected == 'rom' ) { over_title = 'Rezultat Pariu Under'; }
						}
						else {
							repeat_time = 0;
							repeat_case = 1;
							over_title = 'default title';
						}
						while ( repeat_time < 3 ) {
							if ( score_sum < selector_over_option || repeat_case == 1 ) {
								over_result = lang_win;
								payout = stake_value * decimal_odd;
								profit = payout - stake_value;
							}
							if ( score_sum == selector_over_option || repeat_case == 2 ) {
								over_result = lang_push;
								payout = stake_value;
								profit = 0;
							}
							if ( score_sum > selector_over_option || repeat_case == 3 ) {
								over_result = lang_lose;
								payout = 0;
								profit = payout - stake_value;
							}
							if ( repeat_case == 1 ) {
								if ( selector_over_option % 1 != 0 ) {
									goals = Math.floor( selector_over_option );
								}
								else {
									goals = selector_over_option - 1;
								}
								if ( lang_selected == 'eng' ) {
									over_title = 'Total number of goals is ' + goals + ' or less';
									if ( goals == 0 ) {
										over_title = 'Total number of goals is ' + goals;
									}
								}
								if ( lang_selected == 'ger' ) {
									over_title = 'Gesamtanzahl der Tore: ' + goals + ' oder weniger';
									if ( goals == 0 ) {
										over_title = 'Gesamtanzahl der Tore: ' + goals;
									}
								}
								if ( lang_selected == 'pol' ) {
									over_title = 'Całkowita liczba goli wynosi ' + goals + ' lub mniej';
									if ( goals == 0 ) {
										over_title = 'Całkowita liczba goli wynosi ' + goals;
									}
								}
								if ( lang_selected == 'rus' ) {
									over_title = 'Общее количество голов - ' + goals + ' или менее';
									if ( goals == 0 ) {
										over_title = 'Общее количество голов - ' + goals;
									}
								}
								if ( lang_selected == 'rom' ) {
									over_title = 'Numărul total de goluri este ' + goals + ' sau mai puţin';
									if ( goals == 0 ) {
										over_title = 'Numărul total de goluri este ' + goals;
									}
								}
							}
							if ( repeat_case == 2 ) {
								if ( lang_selected == 'eng' ) { over_title = 'Total number of goals is ' + Math.round( selector_over_option ); }
								if ( lang_selected == 'ger' ) { over_title = 'Gesamtanzahl der Tore: ' + Math.round( selector_over_option ); }
								if ( lang_selected == 'pol' ) { over_title = 'Całkowita liczba goli wynosi ' + Math.round( selector_over_option ); }
								if ( lang_selected == 'rus' ) { over_title = 'Общее количество голов - ' + Math.round( selector_over_option ); }
								if ( lang_selected == 'rom' ) { over_title = 'Numărul total de goluri este ' + Math.round( selector_over_option ); }
							}
							if ( repeat_case == 3 ) {
								goals = Math.floor( selector_over_option ) + 1;
								if ( lang_selected == 'eng' ) { over_title = 'Total number of goals is ' + goals + ' or more'; }
								if ( lang_selected == 'ger' ) { over_title = 'Gesamtanzahl der Tore: ' + goals + ' oder mehr'; }
								if ( lang_selected == 'pol' ) { over_title = 'Całkowita liczba goli wynosi ' + goals + ' lub więcej'; }
								if ( lang_selected == 'rus' ) { over_title = 'Общее количество голов - ' + goals + ' или более'; }
								if ( lang_selected == 'rom' ) { over_title = 'Numărul total de goluri este ' + goals + ' sau mai mult'; }
							}
							output = output + '<div class="result-title">' + over_title + '</div>';
							output = output + '<table id="ds-result-table-single">';
							output = output + '<tr><td>' + result_cell + ':</td><td>' + over_result + '</td></tr>';
							output = output + '<tr><td>' + payout_cell + ':</td><td>' + Math.round( payout * 100 ) / 100 + '</td></tr>';
							output = output + '<tr><td>' + profit_cell + ':</td><td>' + Math.round( profit * 100 ) / 100 + '</td></tr>';
							output = output + '</table>';
							repeat_time++;
							repeat_case++;
							if ( selector_over_option % 1 != 0 ) {
								repeat_case++;
								repeat_time++;
							}
						}
					}
					// PARTICULAR VALUE
					if ( over_value_type == 'part' ) {
						if ( final_score_type == 'score' ) {
							repeat_time = 2;
							if ( lang_selected == 'eng' ) { over_title = 'Under Bet Outcome'; }
							if ( lang_selected == 'ger' ) { over_title = 'Unter-Wette Ergebnis'; }
							if ( lang_selected == 'pol' ) { over_title = 'Rozstrzygnięcie zakładu Poniżej'; }
							if ( lang_selected == 'rus' ) { over_title = 'Результат ставки на понижение'; }
							if ( lang_selected == 'rom' ) { over_title = 'Rezultat Pariu Under'; }
						}
						else {
							repeat_time = 0;
							over_title = 'default title';
						}
						while ( repeat_time < 3 ) {
							over_bet_a = parseFloat( selector_over_option ) - 0.25;
							over_bet_b = parseFloat( selector_over_option ) + 0.25;
							wager = stake_value / 2;
							if ( final_score_type != 'score' ) { score_sum = Math.floor( over_bet_b ) - 1 + repeat_time; }
							if ( score_sum < over_bet_a ) {
								result_a = lang_win;
								pay_a = wager * decimal_odd;
								profit_a = pay_a - wager;
							}
							if ( score_sum == over_bet_a ) {
								result_a = lang_push;
								pay_a = wager;
								profit_a = 0;
							}
							if ( score_sum > over_bet_a ) {
								result_a = lang_lose;
								pay_a = 0;
								profit_a = pay_a - wager;
							}
							if ( score_sum < over_bet_b ) {
								result_b = lang_win;
								pay_b = wager * decimal_odd;
								profit_b = pay_b - wager;
							}
							if ( score_sum == over_bet_b ) {
								result_b = lang_push;
								pay_b = wager;
								profit_b = 0;
							}
							if ( score_sum > over_bet_b ) {
								result_b = lang_lose;
								pay_b = 0;
								profit_b = pay_b - wager;
							}
							pay_a = Math.round( pay_a * 100 ) / 100;
							pay_b = Math.round( pay_b * 100 ) / 100;
							pay_total = pay_a + pay_b;
							pay_total = Math.round( pay_total * 100 ) / 100;
							profit_a = Math.round( profit_a * 100 ) / 100;
							profit_b = Math.round( profit_b * 100 ) / 100;
							profit_total = profit_a + profit_b;
							profit_total = Math.round( profit_total * 100 ) / 100;
							if ( result_a == result_b ) {
								result_final = result_a;
							}
							else {
								if ( result_a == lang_win || result_b == lang_win ) {
									result_final = lang_half_win;
								}
								else {
									result_final = lang_half_lose;
								}
							}
							if ( final_score_type != 'score' ) {
								if ( lang_selected == 'eng' ) {
									if ( result_final == 'Win' ) {
										over_title = 'Total number of goals is ' + score_sum + ' or less';
										if ( score_sum == 0 ) {
											over_title = 'Total number of goals is ' + score_sum;
										}
									}
									if ( result_final == 'Lose' ) {
										over_title = 'Total number of goals is ' + score_sum + ' or more';
									}
									if ( result_final == 'Half Win' || result_final == 'Half Lose' ) {
										over_title = 'Total number of goals is ' + score_sum;
									}
								}
								if ( lang_selected == 'ger' ) {
									if ( result_final == 'Gewinn' ) {
										over_title = 'Gesamtanzahl der Tore: ' + score_sum + ' oder weniger';
										if ( score_sum == 0 ) {
											over_title = 'Gesamtanzahl der Tore: ' + score_sum;
										}
									}
									if ( result_final == 'Verlust' ) {
										over_title = 'Gesamtanzahl der Tore: ' + score_sum + ' oder mehr';
									}
									if ( result_final == 'halber Gewinn' || result_final == 'halber Verlust' ) {
										over_title = 'Gesamtanzahl der Tore: ' + score_sum;
									}
								}
								if ( lang_selected == 'pol' ) {
									if ( result_final == 'Wygrana' ) {
										over_title = 'Całkowita liczba goli wynosi ' + score_sum + ' lub mniej';
										if ( score_sum == 0 ) {
											over_title = 'Całkowita liczba goli wynosi ' + score_sum;
										}
									}
									if ( result_final == 'Przegrana' ) {
										over_title = 'Całkowita liczba goli wynosi ' + score_sum + ' lub więcej';
									}
									if ( result_final == 'Połowa wygrana' || result_final == 'Połowa przegrana' ) {
										over_title = 'Całkowita liczba goli wynosi ' + score_sum;
									}
								}
								if ( lang_selected == 'rus' ) {
									if ( result_final == lang_win ) {
										over_title = 'Общее количество голов - ' + score_sum + ' или менее';
										if ( score_sum == 0 ) {
											over_title = 'Общее количество голов - ' + score_sum;
										}
									}
									if ( result_final == lang_lose ) {
										over_title = 'Общее количество голов - ' + score_sum + ' или более';
									}
									if ( result_final == lang_half_win || result_final == lang_half_lose ) {
										over_title = 'Общее количество голов - ' + score_sum;
									}
								}
								if ( lang_selected == 'rom' ) {
									if ( result_final == lang_win ) {
										over_title = 'Numărul total de goluri este ' + score_sum + ' sau mai puţin';
										if ( score_sum == 0 ) {
											over_title = 'Numărul total de goluri este ' + score_sum;
										}
									}
									if ( result_final == lang_lose ) {
										over_title = 'Numărul total de goluri este ' + score_sum + ' sau mai mult';
									}
									if ( result_final == lang_half_win || result_final == lang_half_lose ) {
										over_title = 'Numărul total de goluri este ' + score_sum;
									}
								}
							}
							if ( lang_selected == 'eng' ) { under_bet_cell = 'Under Bet'; }
							if ( lang_selected == 'ger' ) { under_bet_cell = 'Unter-Wette'; }
							if ( lang_selected == 'pol' ) { under_bet_cell = 'Zakład na Poniżej'; }
							if ( lang_selected == 'rus' ) { under_bet_cell = 'Ставка на понижение'; }
							if ( lang_selected == 'rom' ) { under_bet_cell = 'Pariu Dedesubt'; }
							output = output + '<div class="result-title">' + over_title + '</div>';
							output = output + '<table id="ds-result-table-split">';
							output = output + '<tr><td></td><td colspan="2">' + half_bets_cell + '</td><td>' + overall_bet_cell + '</td></tr>'
							output = output + '<tr><td>' + under_bet_cell + ':</td><td>' + over_bet_a + '</td><td>' + over_bet_b + '</td><td>' + selector_over_option + '</td></tr>';
							output = output + '<tr><td>' + wager_cell + ':</td><td>' + wager + '</td><td>' + wager + '</td><td>' + stake_value + '</td></tr>';
							output = output + '<tr><td>' + result_cell + ':</td><td>' + result_a + '</td><td>' + result_b + '</td><td>' + result_final + '</td></tr>';
							output = output + '<tr><td>' + payout_cell + ':</td><td>' + pay_a + '</td><td>' + pay_b + '</td><td>' + pay_total + '</td></tr>';
							output = output + '<tr><td>' + profit_cell + ':</td><td>' + profit_a + '</td><td>' + profit_b + '</td><td>' + profit_total + '</td></tr>';
							output = output + '</table>';
							repeat_time++;
						}
					}
					document.getElementById( 'result' ).innerHTML = output; // MAKE THE OUTPUT
				}
			}
		}
		else {
			if ( lang_selected == 'eng' ) { document.getElementById( 'odds_error' ).innerHTML = 'Wrong odds format'; }
			if ( lang_selected == 'ger' ) { document.getElementById( 'odds_error' ).innerHTML = 'ungültiges Quotenformat'; }
			if ( lang_selected == 'pol' ) { document.getElementById( 'odds_error' ).innerHTML = 'Nieprawidłowy format kursu'; }
			if ( lang_selected == 'rus' ) { document.getElementById( 'odds_error' ).innerHTML = 'Неверный формат коэффициентов'; }
			if ( lang_selected == 'rom' ) { document.getElementById( 'odds_error' ).innerHTML = 'Formatul cotelor incorect'; }
			document.getElementById( 'result' ).innerHTML = ''; // CLEAR
		}
	}
	else {
		if ( lang_selected == 'eng' ) { document.getElementById( 'stake_error' ).innerHTML = 'Wrong stake format'; }
		if ( lang_selected == 'ger' ) { document.getElementById( 'stake_error' ).innerHTML = 'ungültiges Einsatzformat'; }
		if ( lang_selected == 'pol' ) { document.getElementById( 'stake_error' ).innerHTML = 'Nieprawidłowy format stawki'; }
		if ( lang_selected == 'rus' ) { document.getElementById( 'stake_error' ).innerHTML = 'Неверный формат ставок'; }
		if ( lang_selected == 'rom' ) { document.getElementById( 'stake_error' ).innerHTML = 'Formatul mizei incorect'; }
		document.getElementById( 'result' ).innerHTML = ''; // CLEAR
	}
}
function reset_form() {
	document.getElementById( 'cell_odds' ).innerHTML = 'Home Team'; // CHANGE ODDS TEXT
	document.getElementById( 'cell_handicap' ).innerHTML = "Home Team Asian Handicap";
	document.getElementById( 'bet_on_home' ).checked = true;
	changeLabel( 'bet_on_selection_home' );
	previous = 'de'; // DEFAULT PREVIOUS FORMAT IS DECIMAL
	document.getElementById( 'odd_input' ).value = 1.91; // CHANGE HANDICAP TEXT
	document.getElementById( 'stake' ).value = 100; // CHANGE HANDICAP TEXT
	document.getElementById( 'result' ).innerHTML = ''; // MAKE THE OUTPUT
	hello = '<select id="select_handicap"><option value="-4.00">-4.00</option><option value="-3.75">-3.75 (-3.5, -4.0)</option><option value="-3.50">-3.50</option><option value="-3.25">-3.25 (-3.0, -3.5)</option><option value="-3.00">-3.00</option><option value="-2.75">-2.75 (-2.5, -3.0)</option><option value="-2.50">-2.50</option><option value="-2.25">-2.25 (-2.0, -2.5)</option><option value="-2.00">-2.00</option><option value="-1.75">-1.75 (-1.5, -2.0)</option><option value="-1.50">-1.50</option><option value="-1.25">-1.25 (-1.0, -1.5)</option><option value="-1.00">-1.00</option><option value="-0.75">-0.75 (-0.5, -1.0)</option><option value="-0.50">-0.50</option><option value="-0.25">-0.25 (0.0, -0.5)</option><option value="0.00" selected="selected">0.0 (Level)</option><option value="0.25">+0.25 (+0.0, +0.5)</option><option value="0.50">+0.50</option><option value="0.75">+0.75 (+0.5, +1.0)</option><option value="1.00">+1.00</option><option value="1.25">+1.25 (+1.0, +1.5)</option><option value="1.50">+1.50</option><option value="1.75">+1.75 (+1.5, +2.0)</option><option value="2.00">+2.00</option><option value="2.25">+2.25 (+2.0, +2.5)</option><option value="2.50">+2.50</option><option value="2.75">+2.75 (+2.5, +3.0)</option><option value="3.00">+3.00</option><option value="3.25">+3.25 (+3.0, +3.5)</option><option value="3.50">+3.50</option><option value="3.75">+3.75 (+3.5, +4.0)</option><option value="4.00">+4.00</option></select>';
	document.getElementById( 'selection_cell' ).innerHTML = hello; // MAKE THE OUTPUT
	document.getElementById( 'final_score_check' ).checked = true;
	document.getElementById( 'final_score_row' ).style.display = ''; // SHOW LAST ROW
	final_score_type = 'score';
	document.getElementById( 'select_home' ).getElementsByTagName( 'option' )[0].selected = 'selected';
	document.getElementById( 'select_away' ).getElementsByTagName( 'option' )[0].selected = 'selected';
	document.getElementById( 'select_odds_format' ).getElementsByTagName( 'option' )[0].selected = 'selected';


}
