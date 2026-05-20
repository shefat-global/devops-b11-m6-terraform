<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <title>Admin Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc." />
    <meta name="author" content="Zoyothemes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    <!-- App css -->
    <link href="{{ asset('backend') }}/assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-style" />

    <!-- Icons -->
    <link href="{{ asset('backend') }}/assets/css/icons.min.css" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" >

</head>

<body class="bg-white">
    <!-- Begin page -->
    <div class="account-page">
        <div class="p-0 container-fluid">
            <div class="row align-items-center g-0">
                <div class="col-xl-5">
                    <div class="row">
                        <div class="mx-auto col-md-7">
                            <div class="p-4 mb-0 border-0 p-md-5 p-lg-0">

                                <div class="p-0 mb-4">
                                    <a href="#" class="auth-logo">
                                        <img src="{{ asset('logo.jpg') }}"
                                        alt="logo-dark" class="mx-auto" height="45" />
                                    </a>

                                    <h3 class="pt-3">Admin Login</h3>
                                </div>

                                <div class="pt-0">
                                    {{-- login with verification code --}}
                                    {{-- <form method="POST" action="{{ route('admin.login') }}" class="my-4"> --}}
                                        {{-- Login without verification code --}}
                                      <form method="POST" action="{{ route('login') }}" class="my-4">
                                        @csrf

                                        <div class="mb-3 form-group">
                                            <label for="email" class="form-label">Email address</label>
                                            <input class="form-control @error('email') is-invalid @enderror"
                                                type="email" name="email" id="email" required=""
                                                placeholder="Enter your email">
                                            @error('email')
                                                <div class="invalid-feedback">
                                                    <strong>{{ $message }}</strong>
                                                </div>
                                            @enderror
                                        </div>

                                        <div class="mb-3 form-group">
                                            <label for="password" class="form-label">Password</label>
                                            <input class="form-control @error('password') is-invalid @enderror"
                                                type="password" name="password" id="password"
                                                placeholder="Enter your password">
                                            @error('password')
                                                <div class="invalid-feedback">
                                                    <strong>{{ $message }}</strong>
                                                </div>
                                            @enderror
                                        </div>

                                        <div class="mb-3 form-group d-flex">
                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="checkbox-signin"
                                                        checked>
                                                    <label class="form-check-label" for="checkbox-signin">Remember
                                                        me</label>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 text-end">
                                                <a class='text-muted fs-14'
                                                    href='{{ route('password.request') }}'>Forgot
                                                    password?</a>
                                            </div>
                                        </div>

                                        <div class="mb-0 form-group row">
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" class="btn btn-primary" type="submit"> Log
                                                        In </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {{-- <div class="my-4 saprator"><span>or sign in with</span></div> --}}
{{--
                                    <div class="mb-4 text-center text-muted">
                                        <p class="mb-0">Don't have an account ?<a class='text-primary ms-2 fw-medium'
                                                href='{{ route('register') }}'>Sing up</a></p>
                                    </div> --}}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-7">
                    <div class="p-4 account-page-bg p-md-5">
                        <div class="text-center">
                            <div class="auth-image">
                                <img src="{{ asset('backend') }}/assets/images/authentication.svg"
                                    class="mx-auto img-fluid" alt="images">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- END wrapper -->

    <!-- Vendor -->
    <script src="{{ asset('backend') }}/assets/libs/jquery/jquery.min.js"></script>
    <script src="{{ asset('backend') }}/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('backend') }}/assets/libs/simplebar/simplebar.min.js"></script>
    <script src="{{ asset('backend') }}/assets/libs/node-waves/waves.min.js"></script>
    <script src="{{ asset('backend') }}/assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="{{ asset('backend') }}/assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
    <script src="{{ asset('backend') }}/assets/libs/feather-icons/feather.min.js"></script>

    <!-- App js-->
    <script src="{{ asset('backend') }}/assets/js/app.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <script>
     @if(Session::has('message'))
     var type = "{{ Session::get('alert-type','info') }}"
     switch(type){
        case 'info':
        toastr.info(" {{ Session::get('message') }} ");
        break;

        case 'success':
        toastr.success(" {{ Session::get('message') }} ");
        break;

        case 'warning':
        toastr.warning(" {{ Session::get('message') }} ");
        break;

        case 'error':
        toastr.error(" {{ Session::get('message') }} ");
        break;
     }
     @endif
    </script>

</body>

</html>
