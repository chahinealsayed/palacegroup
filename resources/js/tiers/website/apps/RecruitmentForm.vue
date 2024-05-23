<script setup lang="ts">
import Button from "@/modules/bootstrap/components/Button.vue";
import StringInput from "@/modules/form/components/StringInput.vue";
import FileInput from "@/modules/upload/components/form/FileInput.vue";
import Toast from "@/modules/bootstrap/components/Toast.vue";
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
const success = ref(false); // Add a success property

class RecruitmentForm extends Model {
    get name(): Field {
        return this.field("name", translate("Name"), this.initData?.name ?? "");
    }
    get email(): Field {
        return this.field("email", translate("Email"), this.initData?.email ?? "");
    }
    get phone(): Field {
        return this.field("phone", translate("Phone"), this.initData?.phone ?? "");
    }
    get apply(): Field {
        return this.field("apply", translate("Applying for"), this.initData?.apply ?? "");
    }
    get file(): Field {
        return this.field("file", translate("Upload Your CV"), this.initData?.file ?? "");
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
            [[this.name, this.apply, this.phone, this.email], StringRule],
            [[this.name, this.apply, this.file, this.phone, this.email], RequiredRule],
        ];
    }
}
// const button = ref<any>(null);

const [model, newModel, destroyModel] = createModel(RecruitmentForm);

const send = () => {
    console.log(model.value?.data);
    model.value?.validate()?.then((valid: boolean) => {
        if (valid) {
            // Button.value?.start?.();
            api()
                .post("/recruitment", model.value?.data ?? {})
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
    <form v-if="model" @submit.prevent="send" class="recruitment-form-vue">
        <div class="row">
            <div class="col-md-12">
                <StringInput :field="model.name" :class="'name'" :placeholder="''"> </StringInput>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <StringInput :field="model.phone" :class="'number'" :placeholder="''"> </StringInput>

            </div>
            <div class="col-md-6">
                <StringInput :field="model.email" :class="'mail'" :placeholder="''"> </StringInput>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <StringInput :field="model.apply" :class="'apply'" :placeholder="''"> </StringInput>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <FileInput :field="model.file" :accept="'.pdf'" :class="'file'" :placeholder="''"></FileInput>
            </div>
            <div v-if="success">
                <Toast :delay="5000" :animated="true"></Toast>
            </div>
        </div>
        <div class="submit-captcha pt-4">
            <div>
                <Button type="submit" color="primary" class="submit" spinner-color="light" ref="button">
                    {{ translate("SEND") }}
                </Button>
            </div>
            <div class="recaptcha">
                <RecaptchaInput :field="model.recaptcha"></RecaptchaInput>
            </div>
        </div>

    </form>
</template>
<style lang="scss">
.recruitment-form-vue {

    .field-wrapper-message,
    .field-wrapper-email,
    .field-wrapper-phone,
    .field-wrapper-apply,
    .field-wrapper-name {
        .input-group {
            input {
                font-size: 14px;
                border: solid 1px #999A99;
                background: white;
                margin-top: 0;
                border-radius: 0;
            }
        }
    }

    .field-wrapper-email,
    .field-wrapper-phone,
    .field-wrapper-apply,
    .field-wrapper-name {
        margin-bottom: 2rem;

        input {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        @media (max-width: 767px) {
            margin-bottom: 1rem;
        }
    }

    .field-wrapper-phone {
        margin-bottom: 0;

        @media (max-width: 767px) {
            margin-bottom: 1rem;
        }
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
            padding: 10px 40px;
        }
    }
}

.submit-captcha {
    display: flex;
    justify-content: space-between;

    @media (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-flow: column-reverse;
    }
}

.field-wrapper-file {
    .input-group {
        .select-file-component {
            width: 100%;
            padding: 25px;
        }
    }
}

.select-file-component .file-output .icon,
.select-file-component .file-output .name {
    background: #3e3e3e !important;
}

.select-file-component .file-output .icon .extension {
    top: 10% !important;
}

.select-file-component .file-input {
    background: #F6F6F6 !important;
    border: 1px solid #F6F6F6 !important;
}

.select-file-component {
    border-radius: 0 !important;
}

.field-wrapper-file .input-group .select-file-component {
    padding: 20px !important;
}
</style>