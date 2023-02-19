function TweetForm() {
  const message = "What are you humming about?";

  const submitHandler = function(e) {
    e.preventDefault();
    console.log('Submit');
  };


  return (
    <section class="newtweet">
      <form method="post" onSubmit={submitHandler} action="/tweets" class="newtweet__form">
        <textarea class="form__textarea" name="text" placeholder={message}></textarea>
        <input type="submit" value="Tweet" class="form__input"/>
        <span class="form__counter">140</span>
      </form>
    </section>);
}

export default TweetForm;
