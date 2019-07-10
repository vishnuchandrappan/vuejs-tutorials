<template lang="html">
    <div class="navigation">
      <b-navbar class="br-5" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
            <router-link to="/">Stock Trader</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/" active-class="active" exact>Home</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/portfolio" active-class="active" exact>Portfolio</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/stocks" active-class="active" exact>Stocks</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item href="#">End Day</b-nav-item>

            <b-nav-item-dropdown text="Save & Load" right>
                  <b-dropdown-item>lorem</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item>Funds: $</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="css" scoped>
    .navigation{
        margin: 40px;
    }
    .br-5{
        border-radius: 5px !important;
    }
    a{
        color:white;
        transition:0.4s;
    }
    a:hover{
        text-decoration: none;
        color:inherit;
    }
    .nav-link{
        transition:0.2s;
        padding:5px;
    }
    .nav-link:hover,.active{
        padding:0px;
        border-top:solid 1px;
    }
</style>
