<script setup lang="ts">
import Button from "@/modules/bootstrap/components/Button.vue";
import StringInput from "@/modules/form/components/StringInput.vue";
import TextInput from "@/modules/form/components/TextInput.vue";
import { createModel } from "@/modules/form/hooks/model";
import { Field } from "@/modules/form/lib/field";
import { Model } from "@/modules/form/lib/model";
import { RequiredRule } from "@/modules/form/rules/required";
import { StringRule } from "@/modules/form/rules/string";
import { mdiAccount, mdiFormTextboxPassword, mdiSend } from "@mdi/js";
import { onMounted, onUnmounted, ref } from "vue";
import Icon from "@/components/Icon.vue";
import { api } from "@/lib/api";
import { metadata, translate } from "@/lib/metadata";
import { isDark } from "@/modules/theme";
import RecaptchaInput from "@/modules/form/components/RecaptchaInput.vue";

import App from "vue";
import { successToast } from "@/modules/bootstrap/lib/toast";
type Props = {
    redirectUrl?: string;
};
const { redirectUrl = "" } = defineProps<Props>();

class ContactForm extends Model {
    get name(): Field {
        return this.field("name", translate("Name*"), this.initData?.name ?? "");
    }
    get email(): Field {
        return this.field("email", translate("Email"), this.initData?.email ?? "");
    }
    get subject(): Field {
        return this.field("subject", translate("Subject(optional)"), this.initData?.subject ?? "");
    }
    get message(): Field {
        return this.field(
            "message",
            translate("Message*"),
            this.initData?.message ?? ""
        );
    }

    get recaptcha(): Field {
        return this.field(
            "recaptcha",
            translate("ReCaptcha"),
            this.initData?.recaptcha ?? ""
        );
    }

    get rules(): any[] {
        return [
            [[this.name, this.subject, this.email, this.message], StringRule],
            [[this.name, this.email, this.message], RequiredRule],
        ];
    }
}
// const button = ref<any>(null);

const [model, newModel, destroyModel] = createModel(ContactForm);

const send = () => {
    model.value?.validate()?.then((valid: boolean) => {
        if (valid) {
            //   button.value?.start?.();
            api()
                .post("/test", model.value?.data ?? {})
                .then(({ data }: any) => {
                    successToast('Form Sent');
                    console.log(model.value?.data);
                })
                .catch((err) => {
                    model.value?.addRemoteErrors?.(err);
                })
                .finally(() => {
                    //   button.value?.stop?.();
                });
        }
    });
};

onMounted(() => {
    newModel();
});

onUnmounted(() => {
    destroyModel();
});
</script>
<template>
    <form v-if="model" @submit.prevent="send" class="contact-form-vue">
        <div class="row">
            <div class="col-md-6">
                <StringInput :field="model.name" :class="'name'" no-label> </StringInput>
                <StringInput :field="model.email" :class="'mail'" no-label> </StringInput>
                <StringInput :field="model.subject" :class="'number'" no-label> </StringInput>
            </div>
            <div class="col-md-6">
                <TextInput :placeholder="'Message*'" :field="model.message" :class="'message'" no-label
                    aria-placeholder="Message*"></TextInput>
            </div>
        </div>
        <div class="submit-captcha pt-4">
            <div>
                <Button type="submit" color="primary" class="submit" spinner-color="light" ref="button">
                    {{ translate("SEND MESSAGE") }}
                </Button>
            </div>
            <div class="recaptcha">
                <RecaptchaInput :field="model.recaptcha"></RecaptchaInput>
            </div>
        </div>

    </form>
</template>
<style lang="scss">
.contact-form-vue {

    .field-wrapper-message,
    .field-wrapper-email,
    .field-wrapper-subject,
    .field-wrapper-name {
        .input-group {
            textarea {
                font-size: 14px;
                border: solid 1px #999A99;
                background: #F6F6F6;
                margin-top: 0;
                border-radius: 0;
            }

            input {
                font-size: 14px;
                border: solid 1px #999A99;
                background: #F6F6F6;
                margin-top: 0;
                border-radius: 0;
            }
        }
    }

    .field-wrapper-email,
    .field-wrapper-subject,
    .field-wrapper-name {
        margin-bottom: 2rem;

        input {
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }

    .field-wrapper-subject {
        margin-bottom: 0;
    }

    .field-wrapper-message {
        height: 100%;
        border-radius: 0;

        .input-group {
            height: 100%;

            textarea {
                border-radius: 0;
                background: #F6F6F6;

                &::placeholder {
                    content: 'Message*';
                }
            }

            @media (max-width: 767px) {
                margin-top: 2rem;
                padding-bottom: 2rem;
            }
        }
    }

    .submit {
        display: inline-block;
        color: #fff;
        font-size: 15px;
        background: #135897;
        padding: 15px 40px;
        font-weight: 600;
        border: 0;
        border-radius: 0;
        transition: all 1s ease;

        &:hover {
            background-color: #3e3e3e;
        }

        @media (max-width: 767px) {
            margin-bottom: 2rem;
            margin-top: 1rem;
            font-size: 12px;
            padding: 10px 20px;
        }
    }
}

.submit-captcha {
    display: flex;
    justify-content: space-between;

    @media (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: start;
        flex-flow: column-reverse;
    }
}
</style>