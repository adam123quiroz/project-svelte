<script>
  import Comments from "./Comments.svelte";
</script>



<div class="Card">
  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user">
        <img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt="">
        <h2>Elmo.pug</h2>
        <span>La Paz, Bolivia</span>
      </div>
      <div class="Card-settings">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div class="Card-photo">
      <figure>
        <img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt="">
      </figure>
    </div>
    <div class="Card-icons">
      <div class="Card-icons-first">
        <i class="fas fa-heart"/>
        <i class="fas fa-paper-plane"/>
      </div>
    </div>
    <div class="Card-icons-second">
      <i class="fas fa-bookmark"/>
    </div>
    <div class="Card-description">
      <h3>elmo.pug</h3>
      <span>Hola!</span>
    </div>
    <Comments/>
  </div>
</div>