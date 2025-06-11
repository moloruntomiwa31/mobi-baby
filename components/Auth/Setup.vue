<template>
	<div class="h-screen flex items-center justify-center">
	  <form class="bg-white w-4/5 max-w-5xl px-8 py-6 rounded-xl shadow-lg">
  
		<!-- Progress Bar -->
		<div class="flex items-center justify-center gap-2 mb-8">
		  <template v-for="(option, index) in visibleOptions" :key="option.id">
			<span
			  v-if="index !== 0"
			  :class="[
				'w-8 mdlg:w-12 h-0.5 flex-auto',
				{
				  'bg-primaryGreen': option.done,
				  'bg-primaryPurple': tab === option.id && !option.done,
				  'bg-primaryGray': !option.done && tab !== option.id,
				},
			  ]"
			/>
			<a
			  :class="[
				'flex items-center gap-2',
				{
				  'text-primaryGreen': option.done,
				  'text-primaryPurple': tab === option.id && !option.done,
				  'text-primaryGray': !option.done && tab !== option.id,
				},
			  ]"
			>
			  <span class="size-8 rounded-full flex items-center justify-center bg-current">
				<SquareCheck v-if="option.done" class="h-[14px] fill-white" />
				<span v-else class="text-white">{{ index + 1 }}</span>
			  </span>
			  <BaseText className="hidden mdlg:block" :content="option.name" />
			</a>
		  </template>
		</div>
  
		<!-- Main Content -->
		<div class="flex flex-col mdlg:flex-row gap-8 items-center justify-center w-full">
  
		  <!-- Upload Section -->
		  <div v-if="tab === 'profile'" class="bg-primaryGray w-40 h-40 mdlg:w-80 mdlg:h-80 rounded-full flex flex-col items-center justify-center gap-3 p-4 shadow-md hover:bg-opacity-90 transition">
			<div class="bg-white/10 rounded-full p-4">
			  <User class="w-10 h-10 text-white" />
			</div>
			<BaseText
			  size="xs"
			  :content="type === 'parent' ? 'Upload baby photo here' : 'Upload your photo'"
			  className="text-white font-medium tracking-wide text-center"
			/>
		  </div>
  
		  <!-- Dynamic Form Content -->
		  <div class="w-full mdlg:w-3/5 flex flex-col gap-6">
			<template v-if="tab === 'profile' && type === 'parent'">
			  <div class="grid grid-cols-2 gap-6">
				<div class="flex flex-col gap-2">
				  <Label for="parent">Parent's Name</Label>
				  <Input id="parent" type="text" placeholder="Aminat Shekirat" class="bg-gray p-4 rounded-md w-full" />
				</div>
				<div class="flex flex-col gap-2">
				  <Label for="baby">Baby's Name</Label>
				  <Input id="baby" type="text" placeholder="Sekinat" class="bg-gray p-4 rounded-md w-full" />
				</div>
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="clinic">Baby's Date of Birth</Label>
				 <DatePicker />
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="gender">Baby's Gender</Label>
				<BaseSelect
				  id="gender"
				  placeholder="Select Gender"
				  :options="['Female', 'Male']"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="aminat123@gmail.com" class="bg-gray p-4 rounded-md w-full" />
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="location">Location</Label>
				<Input id="location" type="text" placeholder="Location" class="bg-gray p-4 rounded-md w-full" />
			  </div>
			</template>
  
			<template v-if="tab === 'profile' && type === 'medical-practitioner'">
			  <div class="flex flex-col gap-2">
				<Label for="fullname">Full Name</Label>
				<Input id="fullname" type="text" placeholder="Dr. John Doe" class="bg-gray p-4 rounded-md w-full" />
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="john.doe@example.com" class="bg-gray p-4 rounded-md w-full" />
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="phone">Phone Number</Label>
				<Input id="phone" type="tel" placeholder="+234 812 345 6789" class="bg-gray p-4 rounded-md w-full" />
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="gender">Gender</Label>
				<BaseSelect
				  id="gender"
				  placeholder="Select Gender"
				  :options="['Female', 'Male']"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			</template>
  
			<template v-if="tab === 'type' && type === 'parent'">
			  <div class="flex flex-col gap-2">
				<Label for="vaccination">Has your baby had their first vaccination?</Label>
				<BaseSelect
				  id="vaccination"
				  :options="['Yes', 'No', 'Not Sure']"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
		<div class="grid md:grid-cols-2 gap-6 md:gap-2 w-full">
			<div class="flex flex-col gap-2">
				<Label for="feeding">How's your baby currently being fed?</Label>
				<BaseSelect
				  id="feeding"
				  :options="['Breastfeeding', 'Formula Feeding', 'Mixed Feeding']"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="concerns">Do you have any feeding concern?</Label>
				<Input id="concerns" type="text" placeholder="Spitting out alot" class="bg-gray p-4 rounded-md w-full" />
			  </div>
		</div>
			  <div class="flex flex-col gap-2">
				<Label for="sleeping">How well is your baby sleeping?</Label>
				<BaseSelect
				  id="sleeping"
				  :options="['Sleeps well', 'Wakes up frequently', 'Sleeps less than 6 hours']"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="health">Any current health concern?</Label>
				<BaseSelect
				  id="health"
				  :options="['Fever', 'Cough', 'Cold', 'Rash', 'Diarrhea', 'Jaundice', 'None']"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			</template>
  
			<template v-if="tab === 'type' && type === 'medical-practitioner'">
			  <div class="flex flex-col gap-2">
				<Label for="clinic">Hospital / Clinic Name</Label>
				<Input id="clinic" type="text" placeholder="General Hospital, Kano" class="bg-gray p-4 rounded-md w-full" />
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="yoe">Years of Experience</Label>
				<BaseSelect
				  id="yoe"
				  :options="yearsOfExperience"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			  <div class="flex flex-col gap-2">
				<Label for="specialization">Area of Specialization</Label>
				<BaseSelect
				  id="specialization"
				  :options="areaOfSpecialization"
				  className="!bg-gray rounded-md !border-none !p-4 w-full"
				/>
			  </div>
			</template>
		  </div>
		</div>
  
		<!-- Navigation Buttons -->
		<div class="w-full flex justify-between mt-6">
		  <Button variant="secondary" :disabled="isFirstStep" @click.prevent="prevStep">Back</Button>
		  <Button :disabled="isLastStep" @click.prevent="nextStep">Next</Button>
		</div>
	  </form>
	</div>
  </template>
  
  
  <script setup lang="ts">
  import { User, SquareCheck } from 'lucide-vue-next'
  
  type Tab = 'profile' | 'type'
  type UserType = 'parent' | 'medical-practitioner'
  
  const route = useRoute()
  const type = computed(() => route.query.type as UserType)
  const tab = ref<Tab>('profile')
  
  const accountSetupOptions = computed(() => [
	{ name: 'Profile', id: 'profile', hide: false, done: false },
	{ name: type.value === 'parent' ? 'Details' : 'Experience', id: 'type', hide: false, done: false }
  ])
  
  const visibleOptions = computed(() => accountSetupOptions.value.filter(o => !o.hide))
  const currentIndex = computed(() => visibleOptions.value.findIndex(t => t.id === tab.value))
  
  const isFirstStep = computed(() => currentIndex.value === 0)
  const isLastStep = computed(() => currentIndex.value === visibleOptions.value.length - 1)
  
  function nextStep() {
	if (!isLastStep.value) {
	  tab.value = visibleOptions.value[currentIndex.value + 1].id as Tab
	}
  }
  
  function prevStep() {
	if (!isFirstStep.value) {
	  tab.value = visibleOptions.value[currentIndex.value - 1].id as Tab
	}
  }

  const yearsOfExperience = ['1-2 years', '3-5 years', '6-10 years', '10+ years']
  const areaOfSpecialization = ['Obstetrics & Gynecology', 'Pediatrics', 'Family Medicine', 'Surgery', 'Nurse', 'Other']
  </script>
  