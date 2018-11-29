var x = Math.floor(Math.random() * 100 + 1);
var turns = 5;
 
$('input').change(function() {
  var guess = $('input').val();
  if (!guess) return;
  guess = Number(guess);
  var hint;
  if (guess == x) {
    hint = '<p>YOU WIN!</p>' +
    turns = 0;
  } else {
    hint = 'Nope.';
    if (guess < x) hint += ' Too small!';
    if (guess > x) hint += ' Too big!';
    turns = turns - 1;
  }
  if (turns == 0) {
    hint += '<div>The secret number was ' + x + '.</div>';
    $('p').hide();
  } else {
    hint += ' You have ' + turns + ' guesses left.';
  }
  $('div').html(hint);
  $(this).select();
});