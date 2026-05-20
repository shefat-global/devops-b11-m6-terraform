
@extends('admin.master')
@section('admin')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<div class="content">

                    <!-- Start Content-->
<div class="container-xxl">

    <div class="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
        <div class="flex-grow-1">
            <h4 class="m-0 fs-18 fw-semibold">Add Service</h4>
        </div>

    </div>

    <!-- Form Validation -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 card-title">Add Service</h5>
                </div><!-- end card header -->

                <div class="card-body">


<form id="myForm" action="{{ route('store.service') }}" method="post" class="row g-3" enctype="multipart/form-data">
	@csrf

    <div class="col-md-6">
        <label for="validationDefault01" class="form-label">Service Name</label>
        <input type="text" name="service_name" class="form-control" >
    </div>

     <div class="col-md-6">
        <label for="validationDefault01" class="form-label">Icon</label>
        <select name="icon" class="form-select">
            <option value="icon-coin-chair">icon-coin-chair</option>
            <option value="icon-hand-tick">icon-hand-tick</option>
            <option value="icon-hand-house">icon-hand-house</option>
            <option value="icon-gear-warning">icon-gear-warning</option>
            <option value="icon-text-search">icon-text-search</option>
            <option value="icon-education">icon-education</option>
            <option value="icon-coin-hand">icon-coin-hand</option>
            <option value="icon-coin-pig">icon-coin-pig</option>
            <option value="icon-coin-virus">icon-coin-virus</option>
            <option value="icon-hand-protect">icon-hand-protect</option>
            <option value="icon-hand-touch">icon-hand-touch</option>
            <option value="icon-user-lock">icon-user-lock</option>
            <option value="icon-coin-bag">icon-coin-bag</option>
            <option value="icon-chart-blue">icon-chart-blue</option>
            <option value="icon-hand-message">icon-hand-message</option>
            <option value="icon-hand-chart">icon-hand-chart</option>
            <option value="icon-pc-code">icon-pc-code</option>
            <option value="icon-code">icon-code</option>
            <option value="icon-lamp-gear">icon-lamp-gear</option>
            <option value="icon-text-pen">icon-text-pen</option>
            <option value="icon-chart">icon-chart</option>
            <option value="icon-vali">icon-vali</option>
        </select>
    </div>

     <div class="col-md-12">
        <label for="validationDefault01" class="form-label">Service Short Description</label>
        <textarea name="service_short" class="form-control" placeholder="Add Service Short Description" ></textarea>
    </div>

       <div class="col-md-12">
        <label for="validationDefault01" class="form-label">Service Description</label>
        <div id="quill-editor" style="height: 200px"> </div>
        <input type="hidden" name="service_desc" id="service_desc">

    </div>

    <div class="col-md-6">
        <label for="validationDefault01" class="form-label">Service Image</label>
        <input type="file" name="image" class="form-control"  id="image">
    </div>

     <div class="col-md-6">
         <img id="showImage" src="{{ url('upload/no_image.jpg') }}" class="rounded-circle avatar-xxl img-thumbnail float-start" alt="image profile">
    </div>


    <div class="col-12">
        <button class="btn btn-primary" type="submit">Save Changes</button>
    </div>
</form>
                </div> <!-- end card-body -->
            </div> <!-- end card-->
        </div> <!-- end col -->



</div> <!-- container-fluid -->

</div>


<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

<!-- Include Quill JavaScript -->
<script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>

<script>
    // Initialize Quill editor
    var quill = new Quill('#quill-editor', {
        theme: 'snow'
    });

    // On form submission, update the hidden input value with the editor content
    document.getElementById('myForm').onsubmit = function() {
        document.getElementById('service_desc').value = quill.root.innerHTML;
    };
</script>



	<script type="text/javascript">
		$(document).ready(function(){
			$('#image').change(function(e){
				var reader = new FileReader();
				reader.onload = function(e){
					$('#showImage').attr('src',e.target.result);
				}
				reader.readAsDataURL(e.target.files['0']);
			})
		})
	</script>



@endsection
