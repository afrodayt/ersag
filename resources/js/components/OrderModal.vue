<template>
    <div>
        <div v-show="isVisible" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ваше замовлення</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submitOrder">
                            <div class="mb-4">
                                <label for="name-input">Ім'я</label>
                                <input type="text" placeholder="Ірина" v-model="name" required>
                            </div>
                            <div class="mb-4">
                                <label for="phone-input">Телефон</label>
                                <input type="tel" v-model="phone" placeholder="+38 050 021 36 21" required>
                            </div>
                            <div class="mb-5">
                                <label for="address-input">Адреса доставки</label>
                                <input type="text" v-model="address" placeholder="місто Київ, відділення нової пошти 52" required>
                            </div>
                            <div class="modal-form-title mb-4">Вибір продукту</div>
                            <div class="d-flex flex-column gap-4">
                                <div class="d-flex align-items-center justify-content-between" v-for="product in products" :key="'order-modal-product-' + product.id">
                                    <div>
                                        <input :id="'product-checkbox' + product.id" type="checkbox" v-model="product.selected" @change="updateProductSelection(product)">
                                        <label :for="'product-checkbox' + product.id">{{ product.productName }}</label>
                                    </div>
                                    <div class="d-flex align-items-center gap-3">
                                        <div>Кількість</div>
                                        <div class="d-flex align-items-center gap-2">
                                            <button @click.prevent="minus(product.id)" :disabled="!product.selected || product.count <= 0">-</button>
                                            <input type="number" v-model="product.count" :disabled="!product.selected" min="0">
                                            <button @click.prevent="plus(product.id)" :disabled="!product.selected">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="info">🚚 Оформіть замовлення до кінця дня і отримайте безкоштовну доставку!</div>
                            <div>Сума до сплати: {{ summary }} грн</div>
                            <button type="submit" class="btn btn-primary">Підтвердити замовлення</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isVisible" class="modal-backdrop fade show" @click="closeModal"></div>
    </div>
</template>

<script>
import {products} from "@/products.js";

export default {
    name: 'OrderModal',
    data() {
        return {
            name: '',
            phone: '',
            address: '',
            summary: 0,
            isVisible: false,
            products: products
        };
    },

    methods: {
        openModal(id) {
            if (id) {
                const product = this.products.find((product) => product.id === id);
                if (product) {
                    product.count += 1;
                    product.selected = true;
                    this.countSum();
                }
            }
            this.isVisible = true;
        },
        closeModal() {
            this.isVisible = false;
            this.resetForm();
        },
        resetForm() {
            this.name = '';
            this.phone = '';
            this.address = '';
            this.products.forEach(product => {
                product.count = 0;
                product.selected = false;
            });
            this.summary = 0;
        },
        plus(id) {
            const product = this.products.find(product => product.id === id);
            if (product) {
                product.count += 1;
            }
            this.countSum();
        },
        minus(id) {
            const product = this.products.find(product => product.id === id);
            if (product && product.count > 0) {
                product.count -= 1;
            }
            this.countSum();
        },
        countSum() {
            this.summary = this.products.reduce((total, product) => {
                if (product.selected && product.count > 0) {
                    return total + product.price * product.count;
                }
                return total;
            }, 0);
        },
        updateProductSelection(product) {
            if (!product.selected) {
                product.count = 0;
            }
            this.countSum();
        },
        submitOrder() {

            const leadData = {
                name: this.name,
                phone: this.phone,
                address: this.address,
                products: this.products,
                summary: this.summary.toString()
            };

            fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leadData),
            })
                .then(response => {
                    if (response.ok) {

                    } else {

                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
    },
};
</script>

<style scoped lang="less">
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
