<template>
  <section id="app">
    <div class="box __presentation">
      <h1>Controle de horários</h1>
      <div class="__description">
        <p>
          Um simples controle pra jornada de trabalho.
        </p>
      </div>
    </div>
    <div class="box __hour-column ">
      <div class="content">
        <div class="formgroup">
          <input type="text" class="forminput" placeholder="Entrada" />
            <label for="name" class="formlabel">
                Entrada
            </label>
        </div>
      </div>
    </div>
    <div class="box __results">
      <div class="propriedade-content">
        <ul>
					<li> + 00:16 </li>	
				</ul>
      </div>
      </div>
  </section>
</template>

<script>
//import VueTimepicker from 'vue2-timepicker'

export default {
  name: 'BaseRolex',
  components: {

  },
}
</script>

<style lang="scss">

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
} 

label {
  display: block;
  color: #555;
}


#app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.box {
  width: 200px;
  height: 200px;

  margin: 5px;
  padding: 10px 20px;

    &.__presentation {
      width: 300px;
      p {
        color: #7a7d87;
      }
    }

    &.__results {
      padding: 50px 0px;
    }

    &.__hour-column {
      padding: 50px 0px;
      
    }
}

.content {
  padding: 0 10px;
  border-left: 2px solid rgba(159, 156, 156, 0.14);
}

.propriedade-content > div, .propriedade-content > ul {
  flex: 1;
  padding: 0 10px;
  margin-bottom: 1em;
  min-width: 260px;
} 

.propriedade-content ul {
  list-style: none;
  border-left: 2px solid rgba(159, 156, 156, 0.14);
}

.propriedade-content li {
  padding-bottom: 10px;
  color: #62a557;
  line-height: 1.6;
  margin-bottom: .5em;
  font-family: courier, monospace;
}

.formlabel {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;

  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
}

.forminput {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255 , 255);
  border: none;
  width: 100%;
  display: block;
  transition: all 0.3s;
}

.forminput:placeholder-shown + .formlabel {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4rm);
}

.formgroup {
  width: 180px;
  height: 20px;
}

</style>
