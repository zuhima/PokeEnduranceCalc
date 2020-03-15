//種族値を格納する変数
var syuzokuti_H = 0;
var syuzokuti_A = 0;
var syuzokuti_B = 0;
var syuzokuti_C = 0;
var syuzokuti_D = 0;
var syuzokuti_S = 0;

//努力値を振った後の実数値を格納する変数
var jisuti_status_H = 0;
var jisuti_status_A = 0;
var jisuti_status_B = 0;
var jisuti_status_C = 0;
var jisuti_status_D = 0;
var jisuti_status_S = 0;

//性格補正値
var seikaku_hosei_A = 1;
var seikaku_hosei_B = 1;
var seikaku_hosei_C = 1;
var seikaku_hosei_D = 1;
var seikaku_hosei_S = 1;

//表示用変数
var hosei_B = '';
var hosei_D = '';

//種族値入力時の動作
$('#syuzokuti_text_H').change(function(){
  var val = $(this).val();
  if(!isNaN(Number(val))){
    syuzokuti_H = Number(val);
  } else {
    syuzokuti_H = 0;
  }
  $(this).val(syuzokuti_H);
  calcJisuti_H(Number($('#doryokuti_text_H').val()));
  $('#jisuti_text_H').val(jisuti_status_H);
  $('#endurance_status_H').text(
    jisuti_status_H + '(' + $('#doryokuti_text_H').val() + ')'
  );
  calcAllEnduranceResult();
})
$('#syuzokuti_text_A').change(function(){
  var val = $(this).val();
  if(!isNaN(Number(val))){
    syuzokuti_A = Number(val);
  } else {
    syuzokuti_A = 0;
  }
  $(this).val(syuzokuti_A);
  jisuti_status_A = calcJisuti_ABCDS(Number($('#doryokuti_text_A').val()), Number(syuzokuti_A), Number(seikaku_hosei_A));
  $('#jisuti_text_A').val(jisuti_status_A);
})
$('#syuzokuti_text_B').change(function(){
  var val = $(this).val();
  if(!isNaN(Number(val))){
    syuzokuti_B = Number(val);
  } else {
    syuzokuti_B = 0;
  }
  $(this).val(syuzokuti_B);
  jisuti_status_B = calcJisuti_ABCDS(Number($('#doryokuti_text_B').val()), Number(syuzokuti_B), Number(seikaku_hosei_B));
  $('#jisuti_text_B').val(jisuti_status_B);
  $('#endurance_status_B').text(
    jisuti_status_B + '(' + $('#doryokuti_text_B').val() + hosei_B + ')'
  );
  calcAllEnduranceResult();
})
$('#syuzokuti_text_C').change(function(){
  var val = $(this).val();
  if(!isNaN(Number(val))){
    syuzokuti_C = Number(val);
  } else {
    syuzokuti_C = 0;
  }
  $(this).val(syuzokuti_C);
  jisuti_status_C = calcJisuti_ABCDS(Number($('#doryokuti_text_C').val()), Number(syuzokuti_C), Number(seikaku_hosei_C));
  $('#jisuti_text_C').val(jisuti_status_C);
})
$('#syuzokuti_text_D').change(function(){
  var val = $(this).val();
  if(!isNaN(Number(val))){
    syuzokuti_D = Number(val);
  } else {
    syuzokuti_D = 0;
  }
  $(this).val(syuzokuti_D);
  jisuti_status_D = calcJisuti_ABCDS(Number($('#doryokuti_text_D').val()), Number(syuzokuti_D), Number(seikaku_hosei_D));
  $('#jisuti_text_D').val(jisuti_status_D);
  $('#endurance_status_D').text(
    jisuti_status_D + '(' + $('#doryokuti_text_D').val() + hosei_D + ')'
  );
  calcAllEnduranceResult();
})
$('#syuzokuti_text_S').change(function(){
  var val = $(this).val();
  if(!isNaN(Number(val))){
    syuzokuti_S = Number(val);
  } else {
    syuzokuti_S = 0;
  }
  $(this).val(syuzokuti_S);
  jisuti_status_S = calcJisuti_ABCDS(Number($('#doryokuti_text_S').val()), Number(syuzokuti_S), Number(seikaku_hosei_S));
  $('#jisuti_text_S').val(jisuti_status_S);
})

//努力値が変更したときの動作
$('#doryokuti_text_H').change(function(){
  $('#remain').text(Number(calcRemain()));
  var doryokuti = $(this).val();
  calcJisuti_H(Number(doryokuti));
  $('#jisuti_text_H').val(Number(jisuti_status_H));
  $('#endurance_status_H').text(
    jisuti_status_H + '(' + $('#doryokuti_text_H').val()  + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_text_A').change(function(){
  $('#remain').text(Number(calcRemain()));
  var doryokuti = $(this).val();
  jisuti_status_A = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_A), Number(seikaku_hosei_A));
  $('#jisuti_text_A').val(jisuti_status_A);
});
$('#doryokuti_text_B').change(function(){
  $('#remain').text(Number(calcRemain()));
  var doryokuti = $(this).val();
  jisuti_status_B = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_B), Number(seikaku_hosei_B));
  $('#jisuti_text_B').val(jisuti_status_B);
  $('#endurance_status_B').text(
    jisuti_status_B + '(' + $('#doryokuti_text_B').val() + hosei_B + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_text_C').change(function(){
  $('#remain').text(Number(calcRemain()));
  var doryokuti = $(this).val();
  jisuti_status_C = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_C), Number(seikaku_hosei_C));
  $('#jisuti_text_C').val(jisuti_status_C);
});
$('#doryokuti_text_D').change(function(){
  $('#remain').text(Number(calcRemain()));
  var doryokuti = $(this).val();
  jisuti_status_D = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_D), Number(seikaku_hosei_D));
  $('#jisuti_text_D').val(jisuti_status_D);
  $('#endurance_status_D').text(
    jisuti_status_D + '(' + $('#doryokuti_text_D').val() + hosei_D + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_text_S').change(function(){
  $('#remain').text(Number(calcRemain()));
  var doryokuti = $(this).val();
  jisuti_status_S = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_S), Number(seikaku_hosei_S));
  $('#jisuti_text_S').val(jisuti_status_S);
});
function calcRemain(){ //残り努力値の計算
  var giving;
  var remain;
  giving = Number($('#doryokuti_text_H').val()) + Number($('#doryokuti_text_A').val()) + Number($('#doryokuti_text_B').val()) + Number($('#doryokuti_text_C').val()) + Number($('#doryokuti_text_D').val()) + Number($('#doryokuti_text_S').val());
  remain = Number(510) - Number(giving);
  return remain;
}
function calcJisuti_H(doryokuti){ //H実数値の計算
  jisuti_status_H = Math.floor((syuzokuti_H*2 + 31 + doryokuti/4) * 1/2) + 50 + 10;
}
function calcJisuti_ABCDS(doryokuti, syuzokuti, seikaku_hosei){
  //ABCDS実数値の計算
  jisuti_status = (Math.floor((syuzokuti*2 + 31 + doryokuti/4) * 1/2) + 5) * seikaku_hosei;
  jisuti_status = Math.floor(jisuti_status);
  return jisuti_status;
}


//努力値のボタンが押されたとき
$('#doryokuti_reset_H').click(function(){
  $('#doryokuti_text_H').val(Number(0));
  $('#remain').text(Number(calcRemain()));
  calcJisuti_H(Number(0));
  $('#jisuti_text_H').val(jisuti_status_H);
  $('#endurance_status_H').text(
    jisuti_status_H + '(' + $('#doryokuti_text_H').val() + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_kyokuburi_H').click(function(){
  $('#doryokuti_text_H').val(Number(252));
  $('#remain').text(Number(calcRemain()));
  calcJisuti_H(Number(252));
  $('#jisuti_text_H').val(jisuti_status_H);
  $('#endurance_status_H').text(
    jisuti_status_H + '(' + $('#doryokuti_text_H').val() + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_reset_A').click(function(){
  $('#doryokuti_text_A').val(Number(0));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_A = calcJisuti_ABCDS(Number(0), Number(syuzokuti_A), Number(seikaku_hosei_A));
  $('#jisuti_text_A').val(jisuti_status_A);
});
$('#doryokuti_kyokuburi_A').click(function(){
  $('#doryokuti_text_A').val(Number(252));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_A = calcJisuti_ABCDS(Number(252), Number(syuzokuti_A), Number(seikaku_hosei_A));
  $('#jisuti_text_A').val(jisuti_status_A);
});
$('#doryokuti_reset_B').click(function(){
  $('#doryokuti_text_B').val(Number(0));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_B = calcJisuti_ABCDS(Number(0), Number(syuzokuti_B), Number(seikaku_hosei_B));
  $('#jisuti_text_B').val(jisuti_status_B);
  $('#endurance_status_B').text(
    jisuti_status_B + '(' + $('#doryokuti_text_B').val() + hosei_B + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_kyokuburi_B').click(function(){
  $('#doryokuti_text_B').val(Number(252));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_B = calcJisuti_ABCDS(Number(252), Number(syuzokuti_B), Number(seikaku_hosei_B));
  $('#jisuti_text_B').val(jisuti_status_B);
  $('#endurance_status_B').text(
    jisuti_status_B + '(' + $('#doryokuti_text_B').val() + hosei_B + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_reset_C').click(function(){
  $('#doryokuti_text_C').val(Number(0));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_C = calcJisuti_ABCDS(Number(0), Number(syuzokuti_C), Number(seikaku_hosei_C));
  $('#jisuti_text_C').val(jisuti_status_C);
});
$('#doryokuti_kyokuburi_C').click(function(){
  $('#doryokuti_text_C').val(Number(252));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_C = calcJisuti_ABCDS(Number(252), Number(syuzokuti_C), Number(seikaku_hosei_C));
  $('#jisuti_text_C').val(jisuti_status_C);
});
$('#doryokuti_reset_D').click(function(){
  $('#doryokuti_text_D').val(Number(0));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_D = calcJisuti_ABCDS(Number(0), Number(syuzokuti_D), Number(seikaku_hosei_D));
  $('#jisuti_text_D').val(jisuti_status_D);
  $('#endurance_status_D').text(
    jisuti_status_D + '(' + $('#doryokuti_text_D').val() + hosei_D + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_kyokuburi_D').click(function(){
  $('#doryokuti_text_D').val(Number(252));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_D = calcJisuti_ABCDS(Number(252), Number(syuzokuti_D), Number(seikaku_hosei_D));
  $('#jisuti_text_D').val(jisuti_status_D);
  $('#endurance_status_D').text(
    jisuti_status_D + '(' + $('#doryokuti_text_D').val() + hosei_D + ')'
  );
  calcAllEnduranceResult();
});
$('#doryokuti_reset_S').click(function(){
  $('#doryokuti_text_S').val(Number(0));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_S = calcJisuti_ABCDS(Number(0), Number(syuzokuti_S), Number(seikaku_hosei_S));
  $('#jisuti_text_S').val(jisuti_status_S);
});
$('#doryokuti_kyokuburi_S').click(function(){
  $('#doryokuti_text_S').val(Number(252));
  $('#remain').text(Number(calcRemain()));
  jisuti_status_S = calcJisuti_ABCDS(Number(252), Number(syuzokuti_S), Number(seikaku_hosei_S));
  $('#jisuti_text_S').val(jisuti_status_S);
});

//性格補正チェックボックスの挙動 / 排他的処理
$('.check_hosei_plus').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_plus').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_hosei_minus').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_minus').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_hosei_A').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_A').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_hosei_B').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_B').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_hosei_C').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_C').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_hosei_D').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_D').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_hosei_S').click(function(){
  if($(this).prop('checked')){
    $('.check_hosei_S').prop('checked', false);
    $(this).prop('checked', true);
  }
});
$('.check_motimono').click(function(){
  if($(this).prop('checked')){
    $('.check_motimono').prop('checked', false);
    $(this).prop('checked', true);
  }
})
$('.check_tokusei').click(function(){
  if($(this).prop('checked')){
    $('.check_tokusei').prop('checked', false);
    $(this).prop('checked', true);
  }
})

//性格補正変数の更新
$('.hosei_checkbox').change(function(){
  var plus = $('.check_hosei_plus:checked').val();
  var minus = $('.check_hosei_minus:checked').val();
  // console.log('plus:' + plus + ' minus:' + minus);
  switch(plus){
    case "A":
      switch(minus){
        case "B":
            hosei_B = '↓';
            hosei_D = '';
            seikaku_hosei_A = 1.1;
            seikaku_hosei_B = 0.9;
            seikaku_hosei_C = 1;
            seikaku_hosei_D = 1;
            seikaku_hosei_S = 1;
        break;
        case "C":
            hosei_B = '';
            hosei_D = '';
            seikaku_hosei_A = 1.1;
            seikaku_hosei_B = 1;
            seikaku_hosei_C = 0.9;
            seikaku_hosei_D = 1;
            seikaku_hosei_S = 1;
        break;
        case "D":
            hosei_B = '';
            hosei_D = '↓';
            seikaku_hosei_A = 1.1;
            seikaku_hosei_B = 1;
            seikaku_hosei_C = 1;
            seikaku_hosei_D = 0.9;
            seikaku_hosei_S = 1;
        break;
        case "S":
            hosei_B = '';
            hosei_D = '';
            seikaku_hosei_A = 1.1;
            seikaku_hosei_B = 1;
            seikaku_hosei_C = 1;
            seikaku_hosei_D = 1;
            seikaku_hosei_S = 0.9;
        break;
        default:
            hosei_B = '';
            hosei_D = '';
            seikaku_hosei_A = 1.1;
            seikaku_hosei_B = 1;
            seikaku_hosei_C = 1;
            seikaku_hosei_D = 1;
            seikaku_hosei_S = 1;
        break;
      }
    break;
    case "B":
      switch(minus){
        case "A":
          hosei_B = '↑';
          hosei_D = '';
          seikaku_hosei_A = 0.9;
          seikaku_hosei_B = 1.1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "C":
          hosei_B = '↑';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1.1;
          seikaku_hosei_C = 0.9;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "D":
          hosei_B = '↑';
          hosei_D = '↓';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1.1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 0.9;
          seikaku_hosei_S = 1;
        break;
        case "S":
          hosei_B = '↑';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1.1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 0.9;
        break;
        default:
          hosei_B = '↑';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1.1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
      }
    break;
    case "C":
      switch(minus){
        case "A":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 0.9;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1.1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "B":
          hosei_B = '↓';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 0.9;
          seikaku_hosei_C = 1.1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "D":
          hosei_B = '';
          hosei_D = '↓';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1.1;
          seikaku_hosei_D = 0.9;
          seikaku_hosei_S = 1;
        break;
        case "S":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1.1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 0.9;
        break;
        default:
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1.1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
      }
    break;
    case "D":
      switch(minus){
        case "A":
          hosei_B = '';
          hosei_D = '↑';
          seikaku_hosei_A = 0.9;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1.1;
          seikaku_hosei_S = 1;
        break;
        case "B":
          hosei_B = '↓';
          hosei_D = '↑';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 0.9;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1.1;
          seikaku_hosei_S = 1;
        break;
        case "C":
          hosei_B = '';
          hosei_D = '↑';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 0.9;
          seikaku_hosei_D = 1.1;
          seikaku_hosei_S = 1;
        break;
        case "S":
          hosei_B = '';
          hosei_D = '↑';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1.1;
          seikaku_hosei_S = 0.9;
        break;
        default:
          hosei_B = '';
          hosei_D = '↑';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1.1;
          seikaku_hosei_S = 1;
        break;
      }
    break;
    case "S":
      switch(minus){
        case "A":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 0.9;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1.1;
        break;
        case "B":
          hosei_B = '↓';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 0.9;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1.1;
        break;
        case "C":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 0.9;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1.1;
        break;
        case "D":
          hosei_B = '';
          hosei_D = '↓';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 0.9;
          seikaku_hosei_S = 1.1;
        break;
        default:
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1.1;
        break;
      }
    break;
    default:
      switch(minus){
        case "A":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 0.9;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "B":
          hosei_B = '↓';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 0.9;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "C":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 0.9;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
        case "D":
          hosei_B = '';
          hosei_D = '↓';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 0.9;
          seikaku_hosei_S = 1;
        break;
        case "S":
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 0.9;
        break;
        default:
          hosei_B = '';
          hosei_D = '';
          seikaku_hosei_A = 1;
          seikaku_hosei_B = 1;
          seikaku_hosei_C = 1;
          seikaku_hosei_D = 1;
          seikaku_hosei_S = 1;
        break;
      }
    break;
  }
  // console.log(seikaku_hosei_A +':'+ seikaku_hosei_B +':'+ seikaku_hosei_C +':'+ seikaku_hosei_D +':'+ seikaku_hosei_S);

  //各実数値の再計算
  var doryokuti = 0;
  doryokuti = $('#doryokuti_text_A').val();
  jisuti_status_A = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_A), Number(seikaku_hosei_A));
  $('#jisuti_text_A').val(jisuti_status_A);

  doryokuti = $('#doryokuti_text_B').val();
  jisuti_status_B = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_B), Number(seikaku_hosei_B));
  $('#jisuti_text_B').val(jisuti_status_B);
  $('#endurance_status_B').text(
    jisuti_status_B + '(' + $('#doryokuti_text_B').val() + hosei_B + ')'
  );
  calcAllEnduranceResult();

  doryokuti = $('#doryokuti_text_C').val();
  jisuti_status_C = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_C), Number(seikaku_hosei_C));
  $('#jisuti_text_C').val(jisuti_status_C);

  doryokuti = $('#doryokuti_text_D').val();
  jisuti_status_D = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_D), Number(seikaku_hosei_D));
  $('#jisuti_text_D').val(jisuti_status_D);
  $('#endurance_status_D').text(
    jisuti_status_D + '(' + $('#doryokuti_text_D').val() + hosei_D + ')'
  );
  calcAllEnduranceResult();

  doryokuti = $('#doryokuti_text_S').val();
  jisuti_status_S = calcJisuti_ABCDS(Number(doryokuti), Number(syuzokuti_S), Number(seikaku_hosei_S));
  $('#jisuti_text_S').val(jisuti_status_S);
});

//結果の表示
function calcAllEnduranceResult(){
  // console.log($('#endurance_status_H').text());
  calcAtkEndurance();
  calcSpAtkEndurance();
  calcTotalEndurance();
}
function calcAtkEndurance(){
  var status_H;
  var status_B;
  status_H = Number($('#jisuti_text_H').val());
  status_B = Number($('#jisuti_text_B').val());
  $('#endurance_result_atk').text(Number(status_H * status_B));
}
function calcSpAtkEndurance(){
  var status_H;
  var status_D;
  status_H = Number($('#jisuti_text_H').val());
  status_D = Number($('#jisuti_text_D').val());
  $('#endurance_result_spatk').text(Number(status_H * status_D));
}
function calcTotalEndurance(){
  var status_H;
  var status_B;
  var status_D;
  status_H = Number($('#jisuti_text_H').val());
  status_B = Number($('#jisuti_text_B').val());
  status_D = Number($('#jisuti_text_D').val());
  $('#endurance_result_total').text(Number(status_H*status_B) + Number(status_H*status_D));
}

//copyボタンを押したときの動作
$('#copy_endurance').click(function(){
  $('#endurance_status_H_copy').text($('#endurance_status_H').text());
  $('#endurance_status_B_copy').text($('#endurance_status_B').text());
  $('#endurance_status_D_copy').text($('#endurance_status_D').text());
  $('#endurance_result_atk_copy').text($('#endurance_result_atk').text());
  $('#endurance_result_spatk_copy').text($('#endurance_result_spatk').text());
  $('#endurance_result_total_copy').text($('#endurance_result_total').text());
})
