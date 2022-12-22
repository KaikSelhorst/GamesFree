<template>
  <section>
    <transition name="game" mode="out-in">
      <div class="game" v-if="game">
        <GameCard
          :game="{ thumbnail: game.thumbnail, url: game.game_url }"
          class="card-game"
        />
        <div class="game-about">
          <h1>{{ game.title }}</h1>
          <p ref="gameDescription">{{ game.description }}</p>
          <button class="expanded-text" @click="expandedText">Read More</button>

          <div class="game-informations game_title">
            <h2>Additional Information</h2>
            <GameInformations
              :informations="
                makeGameInformations(
                  null,
                  'title',
                  'developer',
                  'publisher',
                  'release_date',
                  'genre',
                  'platform'
                )
              "
              :columns="3"
            />
          </div>
          <GameScreenshots :screenshots="game.screenshots" />
          <div
            class="game-informations game_title"
            v-if="game.minimum_system_requirements"
          >
            <h2>
              Minimum System Requirements <span class="dark">(Windows)</span>
            </h2>
            <GameInformations
              :informations="game.minimum_system_requirements"
              :columns="2"
            />
          </div>
        </div>
      </div>
      <TheLoading v-else />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";
import GameCard from "@/components/GameCard.vue";
import GameInformations from "@/components/GameInformations.vue";
import GameScreenshots from "@/components/GameScreenshots.vue";

export default {
  name: "GameView",
  props: ["id"],
  components: {
    GameCard,
    GameInformations,
    GameScreenshots,
  },
  data() {
    return {
      game: null,
    };
  },
  methods: {
    async setGame() {
      this.game = await api.getGame(this.id);
    },
    makeGameInformations(base, ...args) {
      const Informations = {};

      if (args.length) {
        args.forEach((arg) => {
          if (!base) Informations[arg] = this.game[arg];
          else Informations[arg] = this.game[base][arg];
        });
      }
      return Informations;
    },
    expandedText() {
      this.$refs.gameDescription.classList.toggle("expanded");
    },
  },
  created() {
    this.setGame();
  },
};
</script>

<style scoped>
.game {
  --color1: red;
  display: grid;
  justify-items: start;
  align-items: flex-start;
  min-height: 100vh;
  margin: 40px auto;
  gap: 32px;
  grid-template-columns: minmax(min-content, 350px) 1fr;
}
.card-game {
  position: sticky;
  top: 24px;
}
@media screen and (max-width: 800px) {
  .game {
    grid-template-columns: minmax(min-content, 300px) 1fr;
  }
}
@media screen and (max-width: 680px) {
  .game {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .card-game {
    position: initial;
  }
}
h1 {
  margin-bottom: 12px;
}

p {
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5rem;
  max-height: 16.5ch;
  transition: all 0.3s;
  overflow: hidden;
}
p.expanded {
  max-height: 250ch;
  transition: 1s;
}
.expanded-text {
  color: #273849;
  display: flex;
  align-items: center;
  border: none;
  margin-top: 24px;
  background: none;
  cursor: pointer;
  padding: 8px;
  font-size: 0.875rem;
  gap: 4px;
  font-weight: 700;
  border-radius: 2px;
  position: relative;
}

.expanded-text::after,
.expanded-text::before {
  content: "";
  height: 2px;
  transition: all 0.3s;
  width: 8px;
  background: #273849;
  display: inline-block;
}
.expanded-text::after {
  position: absolute;
  transition: all 0.3s;
  transform: rotate(90deg);
  left: 8px;
}
p.expanded + .expanded-text::after {
  transform: rotate(0deg);
}
.game_title {
  margin-top: 40px;
}
.dark {
  opacity: 80%;
  font-size: 1.125rem;
}

/* Game Section Animation */
.game-enter {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}
.game-enter-active {
  transition: all 0.3s;
}
</style>
