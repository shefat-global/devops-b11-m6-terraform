@extends('admin.master')
@section('admin')

<div class="content">

    <!-- Start Content-->
    <div class="container-xxl">

        <div class="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
            <div class="flex-grow-1">
                <h4 class="m-0 fs-18 fw-semibold">All Slider</h4>
            </div>

            <div class="text-end">
                <ol class="py-0 m-0 breadcrumb">
                    <a class="btn btn-primary" href="{{ route('add.slider') }}">Add Slider</a>
                </ol>
            </div>
        </div>

        <!-- Datatables  -->
        <div class="row">
            <div class="col-12">
                <div class="card">

                    <div class="card-header">
                        <h5 class="mb-0 card-title">All Slider</h5>
                    </div><!-- end card header -->

                    <div class="card-body">
                        <table id="datatable" class="table table-bordered dt-responsive table-responsive nowrap">
                            <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Image</th>
                                <th>Heading</th>
                                <th>Description	</th>
                                <th>Link</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach($slider as $key=> $item)
                                    <tr>
                                        <td>{{ $key+1 }}</td>
                                        <td><img src="{{ asset($item->image) }}" style="width:70px; height:40px;"></td>
                                        <td>{{ $item->heading }}</td>
                                        <td>{{ Str::limit($item->description, 20); }}</td>
                                        <td>{{ $item->link }}</td>
                                        <td>
                                            <a href="{{ route('edit.slider',$item->id) }}" class="btn btn-success btn-sm">Edit</a>
                                            <a href="{{ route('delete.slider',$item->id) }}" class="btn btn-danger btn-sm" id="delete">Delete</a>
                                        </td>
                                        </tr>
                                @endforeach
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>


    </div> <!-- container-fluid -->

</div> <!-- content -->


@endsection
