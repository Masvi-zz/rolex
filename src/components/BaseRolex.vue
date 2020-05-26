<template>
    <section id="app">
        <div class="container">
            <div class="container__row">
                <div class="container__col-sm-12">
                    <h1>Controle de horários</h1>
                </div>
                <div class="container__col-sm-12">
                    <p>
                        Um simples controle pra jornada de trabalho. 
                    </p>
                </div>
                <div class="container__col-sm-12 container__col-md-8">
                    <div class="formgroup">
                        <input
                            v-model="hour"
                            type="text"
                            class="forminput"
                            :placeholder="labelInput"
                            @keyup.enter="setNewHour"
                        >
                        <label
                            for="name"
                            class="formlabel"
                        >
                            {{ labelInput }}
                        </label>
                    </div>
                </div>
                <div class="container__col-sm-12 container__col-md-4 container__result">
                    <div class="propriedade-content">
                        <ul>
                            <li> + 00:16 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "BaseRolex",
    components: {

    },
    data() {
        return {
            journey: [],
            hour: null,
            labelInput: "Entrada"
        }
    },
    methods: {
        setNewHour() {
            this.journey.push(this.hour)
            this.hour = null

            if (this.journey.length === 1) {
                console.log("informe a saida")
                this.labelInput = "Saída"
            }
        }
    }
}
</script>

<style lang="scss">
$grid__bp--md: 768;
$grid__cols: 12;

.container {
  max-width: $grid__bp--md * 1px;
  margin: 0 auto;
  &--fluid {
    margin: 0;
    max-width: 100%;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__result {
    display: flex;
    flex-wrap: wrap;
  }

  @for $i from 1 through $grid__cols {
    &__col-sm-#{$i} {
      flex-basis: (100 / ($grid__cols / $i) ) * 1%;
    }
  }
  @media screen and (min-width: $grid__bp--md * 1px) {
    @for $i from 1 through $grid__cols {
      &__col-md-#{$i} {
        flex-basis: (100 / ($grid__cols / $i) ) * 1%;
      }
    }
  }
}



//Styling of grid for demostration purposes
.container {
  //background-color: #88d8b0;
  padding: 10px;
  box-sizing: border-box;
  
  @at-root {
    [class*='container__col-'] {
      width: 150px;
      height: 30px;
     // background-color: #ff6f69;
      //outline: 1px solid #ffcc5c;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}



p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  &.small {
    margin-block-start: 0em;
     margin-block-end: 1em;
     margin-inline-start: 0px;
     margin-inline-end: 0px;
  }
} 

label {
  display: block;
  color: #555;
}

.propriedade-content > div, .propriedade-content > ul {
  flex: 1;
  padding: 0 30px;
  margin-bottom: 1em;
  min-width: 430px;
} 

.propriedade-content ul {
    margin-left: 0px;
    list-style: none;
    border-left: 2px solid rgba(159, 156, 156, 0.14);
}

.propriedade-content li {
  padding-top: 0px;
  color: #62a557;
  line-height: 1.6;
  margin-bottom: .5em;
  font-family: courier, monospace;
}

.forminput {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 0.7rem;
  padding: 0.5rem 0.5rem;
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
