<template>
  <main>
    <!-- <div class="container">
      <h2 class="text-center p-3">CATEGORY CREATE FORM</h2>
      <form v-on:submit.prevent="createCategory" class="border p-3">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input
            type="text"
            class="form-control"
            v-model="category.name"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="image">Choose an Image</label>
          <input
            type="file"
            class="form-control"
            v-on:change="attachImage"
            id="password"
          />
        </div>
        <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">CANCEL</button>
        <button type="submit" class="btn btn-primary" v-on:click="NewCategoryModal">CREATE CATEGORY</button>
      </form>
    </div> -->
    <button class="btn btn-primary btn-lg" v-on:click="showNewCategoryModal">
      <span class="fa fa-plus"></span>Create New Category
    </button>
    <b-modal ref="newCategoryModal" hide-footer title="Add New Category">
      <div class="container">
        <h2 class="text-center p-3">CATEGORY CREATE FORM</h2>
        <form v-on:submit.prevent="createCategory" class="border p-3">
          <div class="form-group">
            <label for="name">Enter Category Name</label>
            <input
              type="text"
              class="form-control"
              v-model="categoryData.name"
              id="name"
              placeholder="Enter category name"
            />
          </div>
          <div class="form-group">
            <label for="image">Choose an Image</label>
            <div v-if="categoryData.image.name">
              <img src="" ref="newCategoryImageDisplay" />
            </div>
            <input
              type="file"
              class="form-control"
              v-on:change="attachImage"
              ref="newCategoryImage"
              id="password"
            />
          </div>
          <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">
            CANCEL
          </button>
          <button type="submit" class="btn btn-primary" v-on:click="NewCategoryModal">
            CREATE CATEGORY
          </button>
        </form>
      </div>
    </b-modal>
  </main>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      categoryData: {
        name: "",
        image: "",
      },
    };
  },
  method: {
    attachImage() {
      //To use file header TODO
      this.categoryData.image = this.$refs.newCategoryImage.files[0];
      let reader = new FileHeader();
      reader.addEventListener('load', function(){
        this.$refs.newCategoryImageDisplay.src = reader.result;
      }.bind(this),false);

      reader.readAsDataURL(this.categoryData.image);
    },
    hideNewCategoryModal() {
      this.$refs.newCategoryModal.hide();
    },
    showNewCategoryModal() {
      this.$refs.newCategoryModal.show();
    },
    createCategory() {
      console.log("Form submitted");
    },
  },
};
</script>
