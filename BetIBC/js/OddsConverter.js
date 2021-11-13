function check_stake(value) {
	var pattern = new RegExp(/^[0-9]{1,}[.,]{0,1}[0-9]*$/);
	return pattern.test(value);	
}
function check_format(format,value) {
	switch (format) {
		case 'eu':			      
			var pattern = new RegExp(/^[0-9]+[.,]{0,1}[0-9]*$/);
			break;
		case 'uk':
			var pattern = new RegExp(/^[0-9]+[\/:]{1}[0-9]+$/);			
			break;
		case 'us':
			var pattern = new RegExp(/^[-+]*[0-9]{2,}[.,]{0,1}[0-9]*$/);
			break;
		case 'hk':
			var pattern = new RegExp(/^[0-9]+[.,]{0,1}[0-9]*$/);
			break;
		case 'in':
			var pattern = new RegExp(/^[-+]*[0-9]+[.,]{0,1}[0-9]*$/);
			break;
		case 'ma':
			var pattern = new RegExp(/^[-+]*[0-9]+[.,]{0,1}[0-9]*$/);
			break;
		default:
			var pattern = new RegExp(/^[0-9]+[.,]{0,1}[0-9]*$/);
			break;
	}
	return pattern.test(value);	
}

function rebuild_format(start,finish,value) {
	var otvet;
	if ( start == 'eu' ) {
		otvet = from_eu(finish,value);	
	} else {
		if ( finish == 'eu' ) {
			otvet = to_eu(start,value);
		} else {
			var pre = to_eu(start,value);			
			otvet = from_eu(finish,pre);
		}			
	}	
	return otvet;
}

function from_eu(finish,value) {
	switch (finish) {			
		case 'uk':
			var fvalue = value - 1;
			break;
		case 'us':			
			var fvalue;
			if ( value < 2 )
				fvalue = 100 / ( 1 - value );
			else if ( value == 2 )
				fvalue = 100;
			else
				fvalue = 100 * ( value - 1 );
			break;
		case 'hk':
			var fvalue = value - 1;
			break;
		case 'in':
			var fvalue;
			if ( value < 2 )
				fvalue = 1 / ( 1 - value );
			else 
				fvalue = value - 1;
			break;
		case 'ma':
			var fvalue;
			if ( value <= 2 )
				fvalue = value - 1;
			else
				fvalue = 1 / ( 1 - value );
			break;
		default:
			var fvalue = value;
			break;
	}
	if ( finish != 'uk' ) {
		fvalue = Math.round( fvalue * 10000 ) / 10000;
	} else {
		/* old
		fvalue = Math.round( fvalue * 10000 ) / 10000;		
		var obw = obw_del(parseInt(fvalue*10000),parseInt(10000));
		var p = (parseInt(fvalue*10000))/parseInt(obw);
		var q = parseInt(10000)/parseInt(obw);
		fvalue = p + '/' + q;
		*/
		/* new. fix by DKurgansky */
		fvalue = to_uk (fvalue);
	}	
	//alert("1-"+fvalue);
	return fvalue;
}
function to_uk(fvalue_to_uk) {
	fvalue_to_uk = Math.round( fvalue_to_uk * 10000 ) / 10000;
	x = 1;
	p = Math.round(fvalue_to_uk * x);
	while ( Math.abs(fvalue_to_uk * x - p) > 0.009)  {
		x ++;
		p = Math.round(fvalue_to_uk * x)
	}
	fvalue_to_uk = p + '/' + x;
	return fvalue_to_uk;
}

function to_eu(start,value) {
	switch (start) {			
		case 'uk':
			var fvalue = value + 1;
			break;
		case 'us':			
			var fvalue;
			if ( value < 0 )
				fvalue =  1 - 100 / value;
			else if ( value == 0 )
				fvalue = 2;
			else
				fvalue =  1 + value / 100;
			break;
		case 'hk':
			var fvalue = value + 1;
			break;
		case 'in':
			var fvalue;
			if ( value < 0 )
				fvalue = 1 - 1 / value ;
			else 
				fvalue = 1 + value;
			break;
		case 'ma':
			var fvalue;
			if ( value <= 1 )
				fvalue = value - 1;
			else
				fvalue = ( 1 / value - 1 ) * ( - 1 ) ;
			break;
		default:
			var fvalue = value;
			break;
	}
	//alert("2-"+fvalue);
	fvalue = Math.round( fvalue * 10000 ) / 10000;
	return fvalue;
}

function to_4(value) {
	var result = Math.round( parseFloat(value.replace(",",".")) * 10000 ) / 10000;
	return result;
}

function to_5(value) {
	var res = value.split(/[\/:]{1}/);
	var result = Math.round( ( parseFloat(res[0])/parseFloat(res[1]) ) * 10000 ) / 10000; 
	return result;
}

function obw_del(a,b) {
	if ( a!=0 )
		return obw_del(b%a,a);
	else
		return b;
}

function do_payout(stake,format,value) {
	var payout;
	switch (format) {
		case 'eu':			      
			payout = stake * value;
			break;
		case 'uk':
			payout = stake * ( value + 1 );
			break;
		case 'us':
			if ( value < 0 ) {
				payout = stake * ( 1 + 100 / ( -1*value ));
			} else {
				payout = stake * ( 1 + value / 100 );
			}
			break;
		case 'hk':
			payout = stake * ( value + 1 );
			break;
		case 'in':			
			payout = stake * to_eu('in',value);
			break;
		case 'ma':
			if ( value > 0 ) {
				payout = stake * ( 1 + value );
			} else {
				payout = stake * 2/*( 1 + 1 / value )*/;
			}
			break;
		default:
			
			break;
	}
	var f =  Math.round( payout );
	return f;	
}


		$('#fc_second_format').on('change',function(event){
			check_all();		
		});
		
		function check_all() {
			var first_for = jQuery('#fc_first_format').val();
			var secon_for = jQuery('#fc_second_format').val();
			var first_val = jQuery('#fc_first_odds').val();
			
			if ( first_val != '' ) {
				if ( check_format(first_for,first_val) ) {
					if ( first_for == 'uk' )
						first_val = to_5(first_val);
					else 
						first_val = to_4(first_val);
					
					jQuery('#first_odds > span.error').css('display','none');
					var res = rebuild_format(first_for,secon_for,first_val);
					jQuery('#fc_second_odds').val(res);	
				} else {
					jQuery('#first_odds > span.error').css('display','block');
					return false;
				}
			} else {
				return false;
			}			
		}
		
		//jQuery('#between_odds img').live('click',function(){
		$('#between_odds img').on('click',function(){
			check_all();
		});
		
		function check_all_2() {
			var stake	= jQuery('#sc_stake').val();
			var format	= jQuery('#sc_format').val();
			var odds	= jQuery('#sc_odds').val();
			var value;
			
			if ( stake != '' && odds != '' ) {
				if ( check_stake(stake) ) {
					jQuery('#sc_stake_block > span.error2').css('display','none');	
					if ( check_format(format,odds) ) {				
						if ( format == 'uk' )
							value = to_5(odds);
						else 
							value = to_4(odds);				
						jQuery('#sc_odds_block > span.error2').css('display','none');				
						var result = do_payout(stake,format,value);				
						jQuery('#payout').val(result);		
					} else {
						jQuery('#sc_odds_block > span.error2').css('display','block');
						return false;
					}
				} else {
					jQuery('#sc_stake_block > span.error2').css('display','block');	
					return false;
				}
			} else {
				return false;
			}
			
		}
		
		$('.calc_img img').on('click',function(){
			check_all_2();
		});
		
		
